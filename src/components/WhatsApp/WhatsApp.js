import React from "react";
import "./style.css"; // Import your CSS file for styling
const whatsAppLogo =
  "https://res.cloudinary.com/drcdjp6s7/image/upload/v1706203945/chella/whatsapp-removebg-preview_jbzflm.png";
const WhatsApp = () => {
  const phoneNumber = "13058773961"; // Replace with your actual phone number
  const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsAppChat = () => {
    window.open(URL, "_blank");
  };

  return (
    <div className="whatsapp-icon-container">
      <img
        src={whatsAppLogo}
        alt="WhatsApp"
        className="whatsapp-icon"
        onClick={openWhatsAppChat}
      />
    </div>
  );
};

export default React.memo(WhatsApp);
