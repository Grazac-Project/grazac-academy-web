import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cn } from "../utils";

const ComingSoon = () => {
  const { name } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  })

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
          <div className={cn("coming__container--right", `coming__container--right-${name}`)}>&nbsp;</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ComingSoon;