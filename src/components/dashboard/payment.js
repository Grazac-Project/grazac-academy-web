import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { addPlan, createCheckout, getDetailsC, getPaymentDue, sendFlutterTx } from "../../api/dashboard/data";

const formatCurrency = (value) => new Intl.NumberFormat("en-NG", {
  style: "currency", currency: "NGN",
}).format(value);
const isPaid = (value) => value === true || value === 1;

const Payment = ({ paymentVerification, checkPaymentStatus } = {}) => {
  const [details, setDetails] = useState({});
  const [due, setDue] = useState(null);
  const [error, setError] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [busy, setBusy] = useState(false);
  const [verification, setVerification] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [checking, setChecking] = useState(false);
  const paymentBusy = useRef(false);
  const paymentOpened = useRef(null);
  const awaitingVerification = useRef(false);

  const load = useCallback(async () => {
    setError(null);
    try {
      const profileResult = await getDetailsC();
      const profile = profileResult.data?.data?.result;
      if (!profile) throw new Error("Unable to load your profile.");
      setDetails({ ...profile, phone: profile.phoneNumber });
      const result = await getPaymentDue();
      if (!result.data?.data) throw new Error("Unable to load your payment due.");
      setDue(result.data.data);
      setError(null);
    } catch (err) {
      setError({ message: err.response?.data?.message || err.message || "Unable to load payment details.", retryLoad: true });
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const verify = useCallback(async (id) => {
    awaitingVerification.current = true;
    setTransactionId(id);
    setVerification("pending");
    setChecking(true);
    let confirmed = false;
    try {
      if (checkPaymentStatus) {
        await checkPaymentStatus(id);
        return;
      }
      const result = await sendFlutterTx(id);
      if (result.status === 200 && result.data?.status === 200 &&
          result.data?.data?.status === "successful" && result.data?.data?.transaction_id === id) {
        confirmed = true;
        const profileResult = await getDetailsC();
        const profile = profileResult.data?.data?.result;
        if (!profile) throw new Error("Unable to refresh your profile.");
        sessionStorage.setItem("user_details", JSON.stringify({
          ...JSON.parse(sessionStorage.getItem("user_details")), ...profile, phone: profile.phoneNumber,
        }));
        sessionStorage.setItem("applicationFee", String(profile.applicationFee));
        window.location.reload();
      }
    } catch (err) {
      setVerification(confirmed ? "profile-refresh-failed" : "request-failed");
    } finally {
      setChecking(false);
    }
  }, [checkPaymentStatus]);

  const handleFlutterPayment = useFlutterwave({
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
    tx_ref: checkout?.tx_ref, amount: checkout?.amount, currency: checkout?.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: { email: details.email, phonenumber: details.phone, name: `${details.firstName} ${details.lastName}` },
    customizations: { title: "Grazac Academy", description: "Payment for Graduate Cohort", logo: "https://grazac.com.ng/logo.png" },
  });

  useEffect(() => {
    if (!checkout || paymentOpened.current === checkout.tx_ref) return;
    paymentOpened.current = checkout.tx_ref;
    const release = () => {
      paymentBusy.current = false;
      setBusy(false);
      setCheckout(null);
    };
    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === "completed" || response.status === "successful") {
          awaitingVerification.current = true;
          closePaymentModal();
          release();
          await verify(String(response.transaction_id));
        } else {
          closePaymentModal();
          release();
          setError({ message: "Payment unsuccessful. Please try again.", retryLoad: false });
        }
      },
      onClose: release,
    }).catch(() => {
      release();
      setError({ message: "Unable to open payment. Please try again.", retryLoad: false });
    });
  }, [checkout, handleFlutterPayment, verify]);

  const startPayment = async (plan, expectedItem) => {
    if (paymentBusy.current || awaitingVerification.current || paymentVerification) return;
    paymentBusy.current = true;
    setBusy(true);
    setError(null);
    try {
      if (plan) {
        const body = new FormData();
        body.append("payment_plan", plan);
        const saved = await addPlan(body);
        if (saved.status !== 200 || saved.data?.status !== 200) throw new Error("Unable to save your payment plan.");
      }
      const current = await getPaymentDue();
      const payment = current.data?.data;
      setDue(payment);
      if (expectedItem && (payment?.due?.item !== expectedItem ||
          payment?.due?.purpose !== due?.due?.purpose || payment?.due?.amount !== due?.due?.amount)) {
        await load();
        throw new Error("Payment due changed. Review the updated payment details before paying.");
      }
      if (!payment?.due) throw new Error("No payment is due. Please refresh your dashboard.");
      const result = await createCheckout({ purpose: payment.due.purpose });
      const created = result.data?.data;
      if (result.data?.status !== 201 || !created?.tx_ref || !(created.amount > 0) || created.currency !== "NGN") {
        throw new Error("Unable to start payment. Please try again.");
      }
      if (created.amount !== payment.due.amount || created.currency !== "NGN") {
        await load();
        throw new Error("Payment due changed. Review the updated payment details before paying.");
      }
      setCheckout(created);
    } catch (err) {
      paymentBusy.current = false;
      setBusy(false);
      setError({ message: err.response?.data?.message || err.message || "Unable to start payment. Please try again.", retryLoad: false });
    }
  };

  const blocked = busy || Boolean(paymentVerification) || Boolean(verification);
  const fields = ["firstInstallment", "subInstallment", "subInstallmentOne"];
  const items = ["first", "second", "third"];
  const rows = due?.due?.purpose !== "admission" && due?.plan === "instalment" && due.prices
    ? due.prices.instalments.map((amount, index) => ({ item: items[index], label: `Installment ${index + 1}`, amount, paid: isPaid(details[fields[index]]) }))
    : due?.due ? [{ ...due.due, label: due.due.purpose === "admission" ? "Admission fee" : "Full tuition", paid: false }] : [];
  const action = (row) => <button className={row.paid ? "paid" : "pay-now"}
    disabled={blocked || due?.due?.item !== row.item} onClick={() => startPayment(undefined, row.item)}>
    {row.paid ? "Paid" : due?.due?.item === row.item ? "Pay Now" : "Not yet due"}
  </button>;

  return (
    <div className="payment">
      <h4>Payment Type: {due?.due?.purpose === "admission" ? "Admission fee" : due?.plan === "instalment" ? "Installment" : due?.plan === "full" ? "Full tuition" : "Payment due"}</h4>
      {error && <p role="alert">{error.message} {error.retryLoad && <button onClick={load}>Retry loading payment details</button>}</p>}
      {!due && !error && <p>Loading payment details...</p>}
      {verification && !paymentVerification && <div role="status">
        <p>{verification === "profile-refresh-failed" ? "Payment verified, but your profile did not refresh." : "Payment verification is pending."} Do not pay again.</p>
        {verification === "request-failed" && <p role="alert">Unable to request payment verification. Retry or contact support.</p>}
        <button disabled={checking || !transactionId} onClick={() => verify(transactionId)}>{checking ? "Checking payment status..." : "Check payment status"}</button>
      </div>}
      {due?.reason === "no_plan" && due.prices && <div>
        <p>Choose your payment plan.</p>
        <button disabled={blocked} onClick={() => startPayment("training only")}>Pay at once ({formatCurrency(due.prices.full)})</button>
        <p>Installments: {due.prices.instalments.map(formatCurrency).join(", ")}</p>
        <button disabled={blocked} onClick={() => startPayment("pay in instalment")}>Pay in installments</button>
      </div>}
      {due?.reason === "lnpl" && <p>Your payment plan has no online tuition payment due.</p>}
      {due?.reason === "paid" && <p>No payment due. Your payments are complete.</p>}
      {due?.reason === "no_price" && <p>No tuition price is available for your course. Please contact support.</p>}
      {rows.length > 0 && <>
        <div className="payment-table"><table>
          <thead><tr><th>Payment</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>{rows.map((row) => <tr key={row.item}><td>{row.label}</td><td>{formatCurrency(row.amount)}</td><td>{row.paid ? "Approved" : due?.due?.item === row.item ? "Due" : "Not yet due"}</td><td>{action(row)}</td></tr>)}</tbody>
        </table></div>
        <div className="payment-mobile">{rows.map((row) => <div className="payment-mobile-container" key={row.item}>
          <div className="details"><span>Payment:</span> {row.label}</div>
          <div className="details"><span>Amount:</span> {formatCurrency(row.amount)}</div>
          <div className="details"><span>Status:</span> {row.paid ? "Approved" : due?.due?.item === row.item ? "Due" : "Not yet due"}</div>
          <div className="payment-mobile-action">{action(row)}</div>
        </div>)}</div>
      </>}
    </div>
  );
};

export default Payment;
