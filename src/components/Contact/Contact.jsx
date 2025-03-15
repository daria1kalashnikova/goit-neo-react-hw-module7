import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

function Contact({ contact, onDelete }) {
  return (
    <li key={contact.id} id={contact.id} className={css.contact}>
      <div className={css["contact-info"]}>
        <p>
          <FaUser className={css["contact-info-icon"]} /> {contact.name}
        </p>
        <p>
          <FaPhone className={css["contact-info-icon"]} /> {contact.number}
        </p>
      </div>
      <button
        className="button"
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
