import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function LoginPage() {
  return (
    <div className="container">
      <PageTitle>Log in your account</PageTitle>
      <LoginForm />
    </div>
  );
}
