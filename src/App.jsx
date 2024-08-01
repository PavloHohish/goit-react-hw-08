import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contactsOps';
import { selectIsLoading, selectError } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      <ContactList />
    </Layout>
  );
}
