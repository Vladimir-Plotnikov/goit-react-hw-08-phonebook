import { useSelector} from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactsSection, Container, ContactWrapper } from './Contacts.styled';
import { Loader } from 'components/Loader';
import { Notification } from 'components/Notification';

export default function Contacts() {
  const contacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);

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
