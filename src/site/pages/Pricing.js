import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiInfo } from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
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
      description="Tuition for Grazac Academy's physical and virtual courses. Pay at once or in installments."
    >
      <section className="gz-page-hero">
        <CircuitPattern className="gz-hero__pattern" seed={11} />
        <div className="gz-container gz-center">
          <p className="gz-eyebrow">Plans & pricing</p>
          <h1 className="gz-h1" style={{ marginLeft: "auto", marginRight: "auto" }}>
            What a course costs
          </h1>
          <p className="gz-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Every plan includes mentorship, job leads and an accredited
            certificate. Paying at once works out cheapest.
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
            title="Common questions about fees"
            lead="If your situation isn't covered here, call or WhatsApp us and we'll work it out with you."
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
