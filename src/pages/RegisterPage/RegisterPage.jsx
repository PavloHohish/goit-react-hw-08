import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function RegisterPage() {
  return (
    <div className="container">
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
