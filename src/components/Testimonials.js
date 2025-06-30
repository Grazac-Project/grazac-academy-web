import scroll from "../images/testimonial-scroll.png";


const Testimonials = () => {
      const scrolLeft = () => {
        document.getElementById("scrolltainer").scrollLeft -= 200;
      };
    
      const scrolRight = () => {
        document.getElementById("scrolltainer").scrollLeft += 200;
      };


  return (
    <div>
    <div className="landing__bottom--text">
            <h2>Testimonials</h2>
          </div>
          <div className="landing__slider-text1">
            <p>
              The success stories, testimonials and reviews from our students
              are exceptional. These are our students that put in deliberate
              efforts and have been intentional and consistent in implementing
              what they learnt from the course.
            </p>
          </div>
          <div className="landing__slider-contain">
            <div className="landing__slider--container" id="scrolltainer">
              <img
                src={scroll}
                alt="scroll"
                className="scroll-left"
                onClick={scrolLeft}
              />
              <img
                src={scroll}
                alt="scroll"
                className="scroll-right"
                onClick={scrolRight}
              />
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/ht8l30MozEM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/ck-f8UD8RqU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/IG5cs69PmBo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/l5FVImbxdqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/6_ILohsUndE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/M8mStqg17cQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            </div>
            </div>
  )
}

export default Testimonials