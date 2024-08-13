import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Modal.module.css';

export default function Modal({ id, setShowModal }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setShowModal(false);
  };

  return (
    <>
      <div className={css.modalOverlay} onClick={() => setShowModal(false)} />
      <div className={css.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <div>
          <button className={css.firstModalBtn} onClick={handleDelete}>
            Yes
          </button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </div>
    </>
  );
}
