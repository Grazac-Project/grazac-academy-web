import React from "react";
import { ReactComponent as WhatsAppIcon } from "../../images/newsletter/whatsapp.svg";
import classes from "./whatsApp.module.css";

const WhatsApp = () => {
  return (
    <>
      <a
        // href="https://wa.me/2348068365951"
        // href="https://wa.link/lspb4k"
        href="https://chat.whatsapp.com/EG62sZ8TqY198wq1vsjsXL?mode=ems_wa_c"
        target="_blank"
        className={classes.whatsapp}
      >
        <WhatsAppIcon />
      </a>
    </>
  );
};

export default WhatsApp;
