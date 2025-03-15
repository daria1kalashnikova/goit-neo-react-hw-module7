import css from "./ContactList.module.css";
import Contact from "/src/components/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOperations";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            onDelete={handleDeleteContact}
            key={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
