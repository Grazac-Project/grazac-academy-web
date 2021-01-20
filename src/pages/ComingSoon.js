import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ComingSoon = () => {
  return (
    <div className="coming">
      <div className="coming__hero">
        <Navbar />

        <div className="coming__container">
          <div className="coming__container--left">
            <div>
              <h3>COMING SOON</h3>
              <h1>Get notified when we launched</h1>

              <form>
                  <input type="email" placeholder="Email"/>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="coming__container--right">&nbsp;</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ComingSoon;