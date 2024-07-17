import React from "react";

import styles from "./ContactHeader.module.css";
export const ContactHeader = () => {
  return (
    <div className={"container ${styles.contact_section}"}>
      <h1>Contact Us</h1>
      <p>
        Let's connect Were here to help and would love to hear from you Whether
        you have a question comment or just want to chat you can reach us
        through the contact form on this page or by phone email or social media
      </p>
    </div>
  );
};
