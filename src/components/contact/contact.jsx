import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import css from './contact.module.css';

const Contact = ({id, name, number, deleteContact}) => {
  return (
    <div className={css.contactBox}>
      <div>
        <p>
          <span className={css.icon}>
            <FaPhone />
          </span>
          {name}
        </p>
        <p>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  )
}

export default Contact
