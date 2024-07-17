import { Button } from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("Abdullah");
  const [email, setEmail] = useState("Abdullah@gmail.com");
  const [text, setText] = useState("I live in Lahore");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="18px" />}
          />
          <Button text="VIA Call" icon={<MdLocalPhone fontSize="18px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL Call"
          icon={<HiMail fontSize="18px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controler}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_controler}>
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" />
          </div>

          <div className={styles.form_controler}>
            <label htmlFor="Text">Text</label>
            <textarea name="Text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/Images/contactimg.svg" alt="contact image" />
      </div>
    </section>
  );
};
