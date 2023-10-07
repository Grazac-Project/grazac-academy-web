import Virtual from "../images/virtual-new.png";
import benzene from '../images/benzene.svg';
import girl from '../images/virtual-girl.png'

const VirtualSection = () => {
  return (
    <section className='virtual_container'>
        <div className='virtual_container_info'>
            <img src={Virtual} alt='new label'/>
            <h1>Elevate Your Learning with our <span>Virtual Classes</span></h1>
            <p>Learn with us from anywhere around the globe, our experienced tutors 
                are here to guide you on a journey of discovery, ensuring you acquire 
                valuable skills and knowledge that transcend borders:
            </p>
            <div className="virtual_container_div">
              <div className="virtual_container_label"><img src={benzene} alt="benzene"/><span>Accessibility</span></div>
              <div className="virtual_container_label"><img src={benzene} alt="benzene"/><span>Mentorship</span></div>
              <div className="virtual_container_label"><img src={benzene} alt="benzene"/><span>Flexibility</span></div>
            </div>
            <button>Learn More</button>
            
        </div>
        <div className="virtual_container_girl">
          <img src={girl} alt="girl" />
        </div>
    </section>
  )
}

export default VirtualSection