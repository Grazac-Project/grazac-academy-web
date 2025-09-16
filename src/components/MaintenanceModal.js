import React from "react";
// import sucess from "../../images/web3/sucess.svg";
// import '../../tailwindComponents.css';
import "tailwindcss/tailwind.css";

const MaintenanceMode = ({ close }) => {
  return (
    <div>
      <div
          onClick={close}
       className="backdrop-blur-2xl opacity-[0.7] bg-[#000000] fixed top-0 left-0 w-full h-[100%] z-30 "></div>

      {/* <div className="flex w-[542px]   bg-[#ffff] right-[30%] absolute top-[120px]  z-[999999] flex-col justify-center items-center  "></div> */}

      <div className="max-w-[450px] px-[68px] py-[48px] sm:py-10 sm:px-8  bg-[#ffff]  absolute  right-[30%] top-[20%] lg:right-[10%] md:right-0 md:left-[10%] z-50  rounded-lg  ">
        <div className="flex flex-col items-center justify-center">
          {/* <img src={sucess} alt="innovation" /> */}

          <h4 className="text-heading text-[24px] mt-4 mb-4 font-bold text-center">
            Thank you for your interest in Grazac Academy! 🎓
          </h4>
          <p className="text-text text-[18px] leading-[21px] mb-8 text-start">
            We’re currently performing some scheduled maintenance to improve
            your application experience. Applications will reopen on Thursday,
            September 18th 2024 Stay tuned and check back shortly.
          </p>
        </div>
        <button
          onClick={close}
          className="bg-primary w-full rounded-lg py-[13px] !mt-8 cursor-pointer"
        >
          Go back Home
        </button>
      </div>
    </div>
  );
};

export default MaintenanceMode;
