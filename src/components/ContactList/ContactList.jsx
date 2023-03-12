import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
  <ul>
    {
      contacts.length ? (
      contacts.map(contact => (
        <ContactItem
            key={contact.id}
            contact={contact}
        />
      ))) : (
          <Notification/>
      )}
  </ul> 
  )
  
  }