import Contact from "../contact/contact"
import css from './contactList.module.css';

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  )
}

export default ContactList
