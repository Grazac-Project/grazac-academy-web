import React from "react";
import sucess from "../../images/web3/fail.svg";
import '../../tailwindComponents.css';



const Modal = ({close}) => {
  return (
    <div>
      <div className="backdrop-blur-2xl opacity-[0.7] bg-[#000000] fixed top-0 left-0 w-full h-[100%] z-30 " onClick={close}></div>

      
      <div className="max-w-[450px]  px-[68px] py-[48px] sm:py-10 sm:px-8  bg-[#ffff]  absolute  right-[30%] top-[20%] lg:right-[10%] md:right-0 md:left-[10%] z-50  rounded-lg  ">
        <div className="flex flex-col items-center justify-center">
          <img src={sucess} alt="innovation" />

          <h4 className="text-heading text-[24px] mt-4 mb-2 font-bold text-center">
            Application Failed! 
          </h4>
          <p className="text-text text-[14px] leading-[21px] mb-8 text-center">
            We were unable to process your application. Please try again, or contact support for assistance via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
