import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import ChallengeIcon from '../../icons/ChallengeIcon';
import DashboardIcon from '../../icons/DashboardIcon';
import PaymentIcon from '../../icons/PaymentIcon';
import PortfolioIcon from '../../icons/PortfolioIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import CohortCard from "../shared/cohortcard/CohortCard"

const AcademySidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/academy",
            name:"Academy",
            icon:<DashboardIcon /> 
        },
        {
            path:"/challenge",
            name:"Challenge",
            icon:<ChallengeIcon />
        },
        {
            path:"/payment",
            name:"Payment",
            icon:<PaymentIcon />
        },
        {
            path:"/portfolio",
            name:"Portfolio",
            icon:<PortfolioIcon />
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<SettingsIcon />
        },      
    ]
    return (
        <div className="academysidebar__container">
           <div className="academysidebar__sidebar">
               <div className="academysidebar__sidebar-top_section">

                <CohortCard status={"Admitted"} cohort={"001"} />
                   {/* <h1  className="academysidebar__sidebar-top_section-logo">Logo</h1> */}
                   <div  className="academysidebar__sidebar-top_section-bars">
                       {/* <FaBars onClick={toggle}/> */}
                   </div>
               </div>

               {menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="academysidebar__sidebar-link" activeclassName="active">
                           <div className="academysidebar__sidebar-link-icon">{item.icon}</div>
                           <div className="academysidebar__sidebar-link-link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default AcademySidebar;