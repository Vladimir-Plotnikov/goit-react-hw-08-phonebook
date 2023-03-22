import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactsSection, Container, ContactWrapper } from './Contacts.styled';
import { Loader } from 'components/Loader';
import { Notification } from 'components/Notification';

export default function Contacts() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsSection>
      <Container>
        <ContactWrapper>
          <Filter />
          {isLoading ? (
            <Loader />
          ) : contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Notification message="There is no contacts." />
          )}
        </ContactWrapper>
      </Container>
    </ContactsSection>
  );
}
