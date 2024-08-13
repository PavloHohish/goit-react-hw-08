import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="text"
            name="email"
            id={emailFieldId}
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.field}
            type="text"
            name="password"
            id={passwordFieldId}
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
