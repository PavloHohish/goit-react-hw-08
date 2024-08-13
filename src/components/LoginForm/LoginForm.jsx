import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/ops';
import css from './LoginForm.module.css';

export default function RegistrationForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form autoComplete="off" className={css.form}>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
