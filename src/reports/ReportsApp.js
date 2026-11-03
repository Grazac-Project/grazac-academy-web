// Internal reporting dashboard for Grazac staff, at /reports. Separate from
// the existing admin app, which it doesn't touch. Data comes from the
// backend's /admin/analytics endpoints (synced from TrainerCentral).

import { useEffect, useState } from "react";
import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { FiActivity, FiBookOpen, FiGrid, FiLogOut, FiUsers } from "react-icons/fi";
import logo from "../images/svg/grazac-logo.svg";
import { login } from "../api/adminAnalytics";
import { usingMocks } from "../api/client";
import { AuthProvider, useAuth } from "./auth";
import { SampleDataBanner } from "./components";
import Overview from "./pages/Overview";
import CoursePerformance from "./pages/CoursePerformance";
import Learners from "./pages/Learners";
import Sync from "./pages/Sync";
import "../site/site.css";
import "./reports.css";

// Keep internal pages out of search engines (robots.txt also disallows /reports).
const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    const previous = document.title;
    document.title = "Reports | Grazac Academy";
    return () => {
      meta.remove();
      document.title = previous;
    };
  }, []);
};

const loginError = (err) => {
  if (err.status === 401) return "Incorrect email or password.";
  if (err.status === 423) return "Too many failed attempts. This account is locked for 15 minutes.";
  if (err.status === 429) return "Too many sign-in attempts from this network. Try again later.";
  if (err.status === 503) return "Admin access isn't configured on the server yet.";
  return err.message || "Couldn't reach the server.";
};

const SignIn = () => {
  const { signIn, notice } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({ busy: false, error: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setState({ busy: true, error: "" });
    try {
      const session = await login({ email: email.trim(), password });
      setPassword("");
      signIn(session);
    } catch (err) {
      setPassword("");
      setState({ busy: false, error: loginError(err) });
    }
  };

  return (
    <div className="gz-rp-signin">
      <form className="gz-card gz-rp-signin__card" onSubmit={submit}>
        <img src={logo} alt="Grazac Academy" width="104" height="38" />
        <h1 className="gz-rp-title" style={{ marginTop: 20 }}>
          Reports
        </h1>
        <p className="gz-rp-muted">For Grazac Academy staff. Sign in with your admin account.</p>
        {notice && (
          <p className="gz-rp-banner" role="status">
            {notice}
          </p>
        )}
        <label className="gz-rp-field" style={{ marginTop: 16 }}>
          <span>Email</span>
          <input type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className="gz-rp-field" style={{ marginTop: 12 }}>
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {state.error && (
          <p className="gz-rp-error" role="alert">
            {state.error}
          </p>
        )}
        <button type="submit" className="gz-btn gz-btn--primary gz-btn--block" style={{ marginTop: 16 }} disabled={state.busy}>
          {state.busy ? "Checking…" : "Sign in"}
        </button>
        <p className="gz-rp-muted" style={{ marginTop: 14, fontSize: 13 }}>
          You stay signed in for this browser tab until you sign out or the session expires.
          {/* Inlined env check so production builds drop this string entirely. */}
          {process.env.NODE_ENV !== "production" &&
            usingMocks &&
            " Development mocks: sign in as mock-admin@example.com with password dev-mock-password."}
        </p>
      </form>
    </div>
  );
};

const nav = [
  { to: "", label: "Overview", icon: FiGrid, exact: true },
  { to: "/courses", label: "Course performance", icon: FiBookOpen },
  { to: "/learners", label: "Learner analytics", icon: FiUsers },
  { to: "/sync", label: "Sync status", icon: FiActivity },
];

const Shell = () => {
  const { path, url } = useRouteMatch();
  const { signOut, email } = useAuth();
  return (
    <div className="gz-rp">
      <header className="gz-rp-bar">
        <div className="gz-rp-bar__brand">
          <img src={logo} alt="Grazac Academy" width="88" height="32" />
          <span>Reports</span>
        </div>
        <nav className="gz-rp-nav" aria-label="Reports">
          {nav.map(({ to, label, icon: Icon, exact }) => (
            <NavLink key={label} to={`${url}${to}`} exact={exact} activeClassName="is-active">
              <Icon aria-hidden="true" /> {label}
            </NavLink>
          ))}
        </nav>
        {email && <span className="gz-rp-bar__user">{email}</span>}
        <button type="button" className="gz-btn gz-btn--secondary gz-btn--sm" onClick={() => signOut("")}>
          <FiLogOut /> Sign out
        </button>
      </header>
      <main className="gz-rp-main">
        <SampleDataBanner />
        <Switch>
          <Route path={path} exact component={Overview} />
          <Route path={`${path}/courses`} component={CoursePerformance} />
          <Route path={`${path}/learners`} component={Learners} />
          <Route path={`${path}/sync`} component={Sync} />
          <Redirect to={path} />
        </Switch>
      </main>
    </div>
  );
};

const Gate = () => {
  const { token } = useAuth();
  return token ? <Shell /> : <SignIn />;
};

const ReportsApp = () => {
  useNoIndex();
  return (
    <div className="gz gz-reports">
      <AuthProvider>
        <Gate />
      </AuthProvider>
    </div>
  );
};

export default ReportsApp;
