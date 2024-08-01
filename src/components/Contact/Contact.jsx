import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import clsx from 'clsx';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        <li className={clsx(css.contactInfo, css.contactName)}>
          <FaUser className={css.firstIcon} size="12" />
          <p className={css.contactInfoFirst}>{name}</p>
        </li>
        <li className={css.contactInfo}>
          <FaPhoneAlt size="12" />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
}
