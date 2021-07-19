import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";

import project from "../images/project.png";
import student from "../images/student.png";
import back from "../images/svg/arrow-back.svg";

const Profile = () => {
  React.useEffect(() => {
    document.title = "Profile - Grazac Academy";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
        <Navbar/>
        <div className="hire_project">
            <Container>
                <div className="hire_project-hero">
                    <h1>Project Name 1</h1>
                    <p>A brief, clear and consise description of the project been worked by each of the students.</p>
                    <img src={project} />
                </div>
            </Container>
        </div>
        <Container>
            <div className="hire_project-essay">
                <div>
                    <h3>Question 1</h3>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornre. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                </div>
                <div>
                    <h3>Question 2</h3>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                </div>
                <div>
                    <h3>Question 3</h3>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                    <p>Proin volutpat id orci vel ornare. In sit amet elit in eros fringilla rhoncus. Etiam auctor tincidunt ligula et facilisis. Suspendisse potenti. Etiam eu odio quis purus tempus egestas ut id sem. Proin a dignissim purus. Integer quis arcu in sem sollicitudin lobortis. Aliquam at neque elit. Cras tincidunt facilisis porta. Ut pretium vitae erat et finibus. Pellentesque a eros sollicitudin, ornare sem eget, hendrerit urna. Mauris blandit suscipit ex, finibus varius tortor imperdiet quis. Sed vitae nunc porta magna ultricies congue. Phasellus eu magna ac mauris malesuada dapibus. Ut rutrum augue pellentesque mauris gravida luctus ut ac urna. Etiam ultrices ex ac hendrerit pharetra. Mauris quis lacinia erat, eget euismod dui. Nulla at turpis in mauris laoreet consequat vitae at felis.</p>
                </div>
                <div className="hire_profile-text1">
                    <img src={back} />
                    <h5>GO BACK TO PROFILE</h5>
                </div>
            </div>
        </Container>
        <Mode />
        <Footer />
    </div>
  );
};

export default Profile;