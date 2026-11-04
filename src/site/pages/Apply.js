import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { ApplyChoices } from "../components/ApplyChooser";

// The same choice as the Apply dialog, as a page: for links shared on social
// media, opened in a new tab, or followed before the app has loaded.
const Apply = () => (
  <Layout
    title="Apply"
    description="Apply to Grazac Academy: learn online on Grazac Learn, or join a physical cohort at our campus."
  >
    <section className="gz-page-hero">
      <CircuitPattern className="gz-hero__pattern" seed={11} />
      <div className="gz-container gz-center">
        <p className="gz-eyebrow">Apply to Grazac Academy</p>
        <h1 className="gz-h1" style={{ marginLeft: "auto", marginRight: "auto" }}>
          How would you like to learn?
        </h1>
        <p className="gz-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
          Online courses are enrolled on Grazac Learn. Physical classes start with an application.
        </p>
      </div>
    </section>
    <section className="gz-section">
      <div className="gz-container" style={{ maxWidth: 880 }}>
        <ApplyChoices />
      </div>
    </section>
  </Layout>
);

export default Apply;
