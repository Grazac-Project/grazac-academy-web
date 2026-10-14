import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiInfo } from "react-icons/fi";
import Layout from "../components/Layout";
import { Check, CtaBand, FaqList, SectionHeading } from "../components/ui";
import { faqGroups } from "../data/faqs";
import { applicationFee, percentOff, pricing } from "../data/pricing";
import { contact, links } from "../data/site";
import pricingPdf from "../../images/newsletter/pricing.pdf";

const paymentFaqs = faqGroups.find((g) => g.topic === "Fees & payment").items;

const Pricing = () => {
  const [mode, setMode] = useState("onsite");
  const current = pricing[mode];

  return (
    <Layout
      title="Pricing"
      description="Transparent tuition for Grazac Academy's onsite and virtual programs. Pay at once or in installments — no hidden charges."
    >
      <section className="gz-page-hero">
        <div className="gz-container gz-center">
          <p className="gz-eyebrow">Plans & pricing</p>
          <h1 className="gz-h1" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Invest in your future. No surprise fees.
          </h1>
          <p className="gz-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Choose how you want to learn, then pay at once or spread it out.
            Every plan includes mentorship, job opportunities and accredited
            certification.
          </p>
          <div style={{ marginTop: 32 }}>
            <div className="gz-segment" role="group" aria-label="Learning mode">
              {Object.entries(pricing).map(([key, p]) => (
                <button
                  key={key}
                  type="button"
                  className={mode === key ? "is-active" : ""}
                  aria-pressed={mode === key}
                  onClick={() => setMode(key)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container">
          <p className="gz-center gz-muted" style={{ marginBottom: 40 }}>
            {current.label} programs · {current.duration}
          </p>
          <div className="gz-pricing">
            {current.plans.map((plan) => {
              const off = percentOff(plan.price, plan.was);
              return (
                <div
                  key={plan.name}
                  className={`gz-plan${plan.featured ? " gz-plan--featured" : ""}`}
                >
                  {plan.featured && <span className="gz-plan__tag">Recommended</span>}
                  <h2 className="gz-plan__name">{plan.name}</h2>
                  <div className="gz-plan__price">
                    <strong>{plan.price}</strong>
                    <span className="gz-plan__was">{plan.was}</span>
                  </div>
                  {off && (
                    <span className="gz-badge gz-badge--green gz-plan__save">
                      Save {off}%
                    </span>
                  )}
                  <p className="gz-plan__note">{plan.note}</p>
                  <ul className="gz-plan__features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Check /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={links.apply}
                    className={`gz-btn gz-btn--block ${
                      plan.featured ? "gz-btn--yellow" : "gz-btn--primary"
                    }`}
                  >
                    Apply now <FiArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="gz-note" style={{ marginTop: 40 }}>
            <FiInfo size={20} />
            <p>
              A one-time <strong>{applicationFee} application fee</strong> applies
              to all programs. Prices vary by course and learning mode. Need a
              plan that fits your situation?{" "}
              <a href={contact.phoneHref} style={{ textDecoration: "underline" }}>
                Talk to our admissions team
              </a>
              .
            </p>
          </div>

          <div className="gz-center" style={{ marginTop: 32 }}>
            <a
              href={pricingPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="gz-btn gz-btn--secondary"
            >
              <FiDownload /> Download pricing (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="gz-section gz-section--soft">
        <div className="gz-container gz-split" style={{ alignItems: "start" }}>
          <SectionHeading
            eyebrow="Payment FAQs"
            title="Questions about fees?"
            lead="Here are the answers people ask for most. Still unsure? We're a call or WhatsApp message away."
            action={
              <Link to="/faq" className="gz-link">
                All FAQs <FiArrowRight />
              </Link>
            }
          />
          <FaqList items={paymentFaqs} />
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default Pricing;
