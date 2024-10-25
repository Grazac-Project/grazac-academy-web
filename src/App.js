import { useState, useRef, lazy, Suspense, useEffect } from "react";
import "./scss/main.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { LoaderContext } from "./context";
import Loader from "./components/Loader";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AcademySidebar from "./academy-dashboard/component/sidebar/AcademySidebar";
import Newsform from "./pages/newsletterModal/newsForm/newsform";
import NewsResponse from "./pages/newsletterModal/newsResponse/newsResponse";
import WhatsApp from "./components/whatsApp/whatsApp";
// import Tawk from "./components/tawkTo/tawk";

const LandingPage = lazy(() => {
  return import("./pages/Landing");
});
const Vitual = lazy(() => {
  return import("./pages/virtualLanding");
});

const About = lazy(() => {
  return import("./pages/AboutUs");
});

const GraduateCourseDetail = lazy(() => {
  return import("./pages/GraduateCourseDetail");
});

const Faq = lazy(() => {
  return import("./pages/Faq");
});

const Contact = lazy(() => {
  return import("./pages/Contact");
});

const Web3 = lazy(() => {
  return import("./pages/web3");
});
const Hire = lazy(() => {
  return import("./pages/hire");
});

const Listing = lazy(() => {
  return import("./pages/hire/Listing");
});

const Profile = lazy(() => {
  return import("./pages/hire/Profile");
});

const HireContact = lazy(() => {
  return import("./pages/hire/Contact");
});

const SignUp = lazy(() => {
  return import("./pages/graduateCohort/auth/SignUp");
});

const Login = lazy(() => {
  return import("./pages/graduateCohort/auth/Login");
});

const Forgot = lazy(() => {
  return import("./pages/graduateCohort/auth/ForgotPassword");
});

const Reset = lazy(() => {
  return import("./pages/graduateCohort/auth/ResetPassword");
});

const MailSent = lazy(() => {
  return import("./pages/graduateCohort/auth/MailSent");
});

const VerifyMail = lazy(() => {
  return import("./pages/graduateCohort/auth/VerifyMail");
});
const Mode = lazy(() => {
  return import("./pages/graduateCohort/auth/mode");
});

const AccountCreated = lazy(() => {
  return import("./pages/graduateCohort/auth/AccountCreated");
});

const DashBoardHome = lazy(() => {
  return import("./pages/graduateCohort/dashboard/Main");
});
const ComponentPage = lazy(() => {
  return import("./components/shared/index");
});

const AcademyDashboardPage = lazy(() => {
  return import("../src/academy-dashboard/pages/dashboard/Dashboard");
});
const AcademyChallengePage = lazy(() => {
  return import("../src/academy-dashboard/pages/challenge/Challenge");
});
const AcademyPaymentPage = lazy(() => {
  return import("../src/academy-dashboard/pages/payment/Payment");
});
const AcademyPortfolioPage = lazy(() => {
  return import("../src/academy-dashboard/pages/portfolio/Portfolio");
});
const AcademySettingsPage = lazy(() => {
  return import("../src/academy-dashboard/pages/settings/Settings");
});
const Pricing = lazy(() => {
  return import("./pages/pricing");
});
const Payment = lazy(() => {
  return import("../src/components/dashboard/payment");
});

const App = () => {
  const [show, setShow] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [news, setNews] = useState("");
  const [newsMessage, setNewsMessage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        setNews("showNews");
      }, 7000);
    }
  }, []);

  const app = useRef();

  return (
    <>
      {/* <Tawk /> */}
      {news === "showNews" && (
        <Newsform setNews={setNews} setNewsMessage={setNewsMessage} />
      )}
      {news === "newsResponse" && (
        <NewsResponse setNews={setNews} newsMessage={newsMessage} />
      )}
      <Provider store={store}>
        <LoaderContext.Provider value={{ show, setShow }}>
          {/* {show && <Loader />} */}

          <Suspense fallback={<Loader />}>
            <div ref={app} className="App" style={{ overflow: "hidden" }}>
              <WhatsApp />
              <Switch>
                {/* <AcademySidebar>
                <Route path="/academy" component={AcademyDashboardPage} />

                <Route path="/challenge" component={AcademyChallengePage} />
                <Route path="/payment" component={AcademyPaymentPage} />
                <Route path="/portfolio" component={AcademyPortfolioPage} />
                <Route path="/settings" component={AcademySettingsPage} />
              </AcademySidebar> */}

                <Route path="/component" component={ComponentPage} />
                {/* authentication pages */}
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={Forgot} />
                <Route path="/resetPassword" component={Reset} />
                <Route path="/mail-sent" component={MailSent} />
                <Route path="/account-created" component={AccountCreated} />
                <Route path="/verification" component={VerifyMail} />
                <Route path="/mode" component={Mode} />

                {/* Graduate dashboard */}
                <Route path="/dashboard" component={DashBoardHome} />
                <Route path="/payment" component={Payment} />

                {/* main pages */}
                <Route path="/" exact component={LandingPage}>
                  {/* <Redirect to="/join"/>  */}
                </Route>
                <Route path="/virtualLanding" exact component={Vitual}>
                  {/* <Redirect to="/join"/>  */}
                </Route>
                {/* <Route path="/join" component={Join}/> */}
                <Route path="/about-us" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/faq" component={Faq} />
                <Route path="/web3" component={Web3} />

                {/* Courses (both graduate and undergraduate) and internship */}
                <Route
                  path="/course-detail-graduate"
                  component={GraduateCourseDetail}
                />
                {/* <Route path="/graduate-accelerator-plan" component={GraduateAccelerator} />
            <Route path="/course-detail-undergraduate" component={UndergraduateCourseDetail} />
            <Route path="/undergraduate-accelerator-plan" component={UndergraduateAccelerator}/>
            <Route path="/graduate-form" component={GraduateForm} />
            <Route path="/undergraduate-form" component={UndergraduateForm} />
          <Route path="/internship" component={InternshipForm} /> */}

                {/*   hire pages */}

                <Route path="/hire" exact component={Hire} />
                <Route path="/hire/listing" component={Listing} />
                <Route path="/hire/:username" component={Profile} />
                <Route path="/hire/contact" component={HireContact} />

                <Route path="/pricing" component={Pricing} />

                {/* Coming soon page */}
                {/* <Route path="/:name/coming-soon" component={ComingSoon} /> */}
              </Switch>
            </div>
          </Suspense>
        </LoaderContext.Provider>
      </Provider>
    </>
  );
};

export default App;
