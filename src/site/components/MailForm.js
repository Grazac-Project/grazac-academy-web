import { useState } from "react";
import { FiSend } from "react-icons/fi";

// There is no contact endpoint on the current backend, so this form opens the
// visitor's email app with the message pre-filled. Swap `onSubmit` for an API
// call when one exists.
const MailForm = ({ to, subjectPrefix, fields, submitLabel = "Send message" }) => {
  const initial = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subjectField = fields.find((f) => f.isSubject);
    const subject = [subjectPrefix, subjectField && values[subjectField.name]]
      .filter(Boolean)
      .join(": ");
    const body = fields
      .filter((f) => !f.isSubject)
      .map((f) => `${f.label}:\n${values[f.name]}`)
      .join("\n\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const rows = [];
  fields.forEach((f) => {
    const last = rows[rows.length - 1];
    if (f.half && last && last.length === 1 && last[0].half) last.push(f);
    else rows.push([f]);
  });

  const renderField = (f) => (
    <div className="gz-field" key={f.name}>
      <label htmlFor={`f-${f.name}`}>
        {f.label}
        {f.required && <span aria-hidden="true"> *</span>}
      </label>
      {f.type === "textarea" ? (
        <textarea
          id={`f-${f.name}`}
          name={f.name}
          required={f.required}
          placeholder={f.placeholder}
          value={values[f.name]}
          onChange={onChange}
        />
      ) : f.type === "select" ? (
        <select
          id={`f-${f.name}`}
          name={f.name}
          required={f.required}
          value={values[f.name]}
          onChange={onChange}
        >
          <option value="">Select…</option>
          {f.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={`f-${f.name}`}
          name={f.name}
          type={f.type || "text"}
          required={f.required}
          placeholder={f.placeholder}
          autoComplete={f.autoComplete}
          value={values[f.name]}
          onChange={onChange}
        />
      )}
    </div>
  );

  return (
    <form className="gz-form" onSubmit={onSubmit}>
      {rows.map((row, i) =>
        row.length === 2 ? (
          <div className="gz-form__row" key={i}>
            {row.map(renderField)}
          </div>
        ) : (
          renderField(row[0])
        )
      )}
      <button type="submit" className="gz-btn gz-btn--primary gz-btn--lg">
        {submitLabel} <FiSend />
      </button>
      <p className="gz-form__hint" role="status">
        {sent
          ? `Your email app should now be open with your message to ${to}. If nothing happened, email us directly at ${to}.`
          : `This opens your email app with your message addressed to ${to}.`}
      </p>
    </form>
  );
};

export default MailForm;
