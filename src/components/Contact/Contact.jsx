import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export const Contact = ({ contact: { name, number } }) => {
  return (
    <div className={css.contact}>
      <div className={css.text}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
};
