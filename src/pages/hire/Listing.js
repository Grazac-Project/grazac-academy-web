import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { getAllTalents } from "../../api/dashboard/hire";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import man from "../../images/man.jpg";
import loader from "../../images/loader-purple.gif";
import arrow from "../../images/svg/arrow-front.svg";
import Loader from "../../components/Loader";


function Listing() {
  const [talents, setTalents] = useState([]);
  const [fetchedPage, setFetchedPage] = useState("1");
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const isEmptyObject=(obj)=> {
    var name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}
  useEffect(() => {
    document.title = "Hire - Grazac Academy";
    window.scrollTo(0, 0);
    fetchTalents(page);
  }, [page]);

  const fetchTalents = (page) => {
    setLoading(true);
    getAllTalents(page)
      .then((response) => response)
      .then((resp) => {
        setLoading(false);
        if (resp.status === 200) {
          
          console.log(resp.data.data.users.length)
          if (resp.data.data.users.length!==0){
            setFetchedPage(resp.data.data.pageNumber);
            setTalents(resp.data.data.users);
        
          }
          else{
            toast.error("End of List!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
          
          
        } 
        
        
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        // toast.error("There was an error, please try again", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // })
      
      });
  };

  const selectPage=(page)=>{
    setLoading(true);
      setPage(page);
      fetchTalents();
  }
  const pagination = (type) => {
    if (type === "next") {
      setLoading(true);
      setPage(prev => prev + 1);
      fetchTalents();
    } else {
      if (fetchedPage === "1") {
      } else {
        setLoading(true);
        setPage(prev => prev - 1);
        fetchTalents();
      }
    }
  };

  return (
    <div>
<ToastContainer/> 
      {isEmptyObject(talents) == false ? (

        <div>
          <div className="hire-bg">
            <Navbar />
            <div className="hire">
              <div className="hire_talents">
                <h2>Our Top Talents</h2>
              </div>
              <Container>
                {loading ? (
                  <div>
                    <img
                      src={loader}
                      alt="loading"
                      width="70px"
                      style={{ margin: "50px auto", display: "block" }}
                    />
                  </div>
                ) : (
                  <div>
                    {talents.map((item, idx) => (
                      <Link
                        style={{ color: "black" }}
                        to={`/hire/profile?id=${item.id}&/${item.firstName}-${item.lastName}`}
                        key={idx}
                      >
                        <div className="hire_listing">
                          <div className="hire_listing-image">
                            <img src={item.profile_upload} alt="man" />
                          </div>
                          <div className="hire_listing-text">
                            <div className="d-flx">
                              <div>
                                <p className="hire_listing-text-1">
                                  {item.firstName} {item.lastName}
                                </p>
                                <p>
                                  {item.profession} <span>{item.location}</span>
                                </p>
                              </div>
                              <span
                                className={
                                  item.status === "Hired"
                                    ? "hire_listing-text-2-hired"
                                    : "hire_listing-text-2-available"
                                }
                              >
                                {item.status === "Hired"
                                  ? "HIRED"
                                  : "AVAILABLE"}
                              </span>
                            </div>
                            <p className="hire_listing-text-3">
                              {item.shortBio}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <div className="hire_listing-pagination">
                  <div
                    className="hire_listing-pagination-text"
                    onClick={() => pagination("prev")}
                  >
                    <p>Previous</p>
                  </div>
                  {fetchedPage === "1" ? (
                    <div></div>
                  ) : (

                    <div onClick={()=>selectPage(parseInt(fetchedPage) - 1)} className="hire_listing-pagination-number">
                      <p onClick={()=>selectPage(parseInt(fetchedPage) - 1)}>{parseInt(fetchedPage) - 1}</p>
                    </div>
                  )}

                  <div className="hire_listing-pagination-number activePage">
                    <p>{fetchedPage}</p>
                  </div>
                  {console.log(fetchedPage)}
                  
                  <div onClick={()=>selectPage(parseInt(fetchedPage) + 1)} className="hire_listing-pagination-number">
                    <p onClick={()=>selectPage(parseInt(fetchedPage) + 1)}>{parseInt(fetchedPage) + 1}</p>
                  </div>
                  <div
                    className="hire_listing-pagination-text"
                    onClick={() => pagination("next")}
                  >
                    <p>Next</p>
                  </div>
                </div>
              </Container>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}
export default Listing;
