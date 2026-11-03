// Staff sign-in for the reporting dashboard.
//
// Staff sign in with their own admin account (POST /admin/login). The
// backend returns a short-lived token (2 hours by default) and checks it on
// every request, so hiding these routes isn't what protects the data. The
// token is kept in sessionStorage for this tab only and is never part of the
// build; the password is never stored.

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "gz-reports-session";

const readSession = () => {
  try {
    const raw = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return raw && raw.token ? raw : null;
  } catch (e) {
    return null;
  }
};

const saveSession = (session) => {
  try {
    if (session) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // Storage blocked: the session lasts until the page reloads.
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(readSession);
  const [notice, setNotice] = useState("");

  /** @param {{token: string, admin: {email: string}}} next */
  const signIn = useCallback((next) => {
    const value = { token: next.token, email: next.admin ? next.admin.email : null };
    saveSession(value);
    setNotice("");
    setSession(value);
  }, []);

  const signOut = useCallback((message = "") => {
    saveSession(null);
    setNotice(message);
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({ token: session ? session.token : "", email: session ? session.email : null, notice, signIn, signOut }),
    [session, notice, signIn, signOut]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const SESSION_EXPIRED = "Your session has ended. Sign in again.";
