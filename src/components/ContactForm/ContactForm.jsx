import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(15, 'Too long')
      .required('Required'),
  });

  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage className={css.warning} name="name" component="span" />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage
            className={css.warning}
            name="number"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
