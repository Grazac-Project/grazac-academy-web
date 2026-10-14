import {
  FiArrowRight,
  FiCalendar,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import Layout from "../components/Layout";
import MailForm from "../components/MailForm";
import { SectionHeading } from "../components/ui";
import { contact } from "../data/site";

const channels = [
  {
    icon: FiPhone,
    title: "Call us",
    text: "Speak with our admissions team about courses, pricing and start dates.",
    label: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: FiMessageCircle,
    title: "WhatsApp",
    text: "Send us a message and we'll help you pick the right course.",
    label: "Chat on WhatsApp",
    href: contact.whatsappChat,
    external: true,
  },
  {
    icon: FiCalendar,
    title: "Book a session",
    text: "Schedule a free 30-minute call with our program manager.",
    label: "Pick a time",
    href: contact.calendly,
    external: true,
  },
  {
    icon: FiMail,
    title: "Email",
    text: "For partnerships, media and anything else.",
    label: contact.email,
    href: `mailto:${contact.email}`,
  },
];

const fields = [
  { name: "name", label: "Full name", required: true, half: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
  { name: "subject", label: "Subject", required: true, isSubject: true, placeholder: "e.g. Question about virtual classes" },
  { name: "message", label: "Message", type: "textarea", required: true, placeholder: "How can we help?" },
];

const Contact = () => (
  <Layout
    title="Contact us"
    description="Get in touch with Grazac Academy by phone, WhatsApp or email, book a session with our program manager, or visit our campus in Abeokuta."
  >
    <section className="gz-page-hero">
      <div className="gz-container">
        <p className="gz-eyebrow">Contact</p>
        <h1 className="gz-h1">We'd love to hear from you.</h1>
        <p className="gz-lead">
          Questions about a course, a payment plan or hiring our talent? Reach
          us however suits you best.
        </p>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <div className="gz-grid gz-grid--4">
          {channels.map(({ icon: Icon, title, text, label, href, external }) => (
            <div className="gz-card gz-channel" key={title}>
              <span className="gz-icon">
                <Icon size={22} />
              </span>
              <h2 className="gz-h3">{title}</h2>
              <p>{text}</p>
              <a
                href={href}
                className="gz-link"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label} <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container gz-split" style={{ alignItems: "start" }}>
        <div>
          <SectionHeading
            eyebrow="Send a message"
            title="Write to us"
            lead="Tell us a little about what you need and we'll get back to you."
          />
          <div className="gz-card">
            <MailForm to={contact.email} subjectPrefix="Website enquiry" fields={fields} />
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Visit us" title="Our campus" />
          <div className="gz-feature" style={{ marginBottom: 24 }}>
            <span className="gz-icon">
              <FiMapPin size={22} />
            </span>
            <div>
              <h3>Grazac Academy, PROHUB</h3>
              <p>{contact.address.join(" ")}</p>
            </div>
          </div>
          <div className="gz-map">
            <iframe
              src={contact.mapEmbed}
              title="Map showing Grazac Academy in Abeokuta"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
