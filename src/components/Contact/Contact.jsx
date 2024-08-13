import { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ contact: { id, name, number } }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={css.contactInfoContainer}>
      <ul className={css.contact}>
        <li className={css.contactInfo}>
          <FaUser className={css.firstIcon} size="12" />
          <p className={css.contactInfoFirst}>{name}</p>
        </li>
        <li className={css.contactInfo}>
          <FaPhoneAlt size="12" />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={() => setShowModal(true)}>Delete</button>

      {showModal && <Modal id={id} setShowModal={setShowModal} />}
    </div>
  );
}
