// import React from 'react'
// import { mentorsData } from './constants'

// const LandingMentors = () => {
//   return (
//     <section className='landingmentors'>
//         <h3 className='landingmentors-head'>Get 1-on-1 Access to Mentors</h3>
//         <p className='landingmentors-text'>We have a list of top-rated mentors, lined up and ready to take you through a seamless learning process</p>
//         <div className='landingmentors-main'>
//           {
//             mentorsData.map((value, i) => (
//               <div className='mentor' key={i}>
//                 <img src={value.image} alt='photo' />
//                 <h4 className=''>{value.name}</h4>
//                 <p className='stack'>{value.role}</p>
//                 <p className='company'>{value.company}</p>
//               </div>
//             ))
//           }
//         </div>
//     </section>
//   )
// }

// export default LandingMentors


import React from 'react';
import { mentorsData } from './constants';

const LandingMentors = () => {
  return (
    <section className="landingmentors">
      <div className="landingmentors-container">
        <h3 className="landingmentors-container-head">Get 1-on-1 Access to Mentors</h3>
        <p className="landingmentors-container-text">
          We have a list of top-rated mentors, lined up and ready to take you through a seamless learning process
        </p>
        <div className="landingmentors-container-main">
          {mentorsData.map((mentor, i) => (
            <div className="mentor" key={i}>
              <img src={mentor.image} alt={mentor.name} />
              <h4 className="mentor-name">{mentor.name}</h4>
              <p className="stack">{mentor.role}</p>
              <p className="company">{mentor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingMentors;
