// import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';
import { removeContact } from 'redux/contacts/contact-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contact-selectors';
 import { useSelector, useDispatch } from 'react-redux';


const ContactList = () => {
//   const getFilteredContacts = () => {
//   const filter = useSelector(getFilter);
//   const contacts = useSelector(getContacts);
// };
//     if (!filter) {
//       return contacts;
//     }
//     const normalizeFilter = filter.toLocaleLowerCase();
//     const filterContacts = contacts.filter(({ name }) => {
//       const normalizeName = name.toLocaleLowerCase();
//       const result = normalizeName.includes(normalizeFilter);
//       return result;
//     });
//     return filterContacts;
//   };

//     const onRemoveContact = id => {
//   const action = removeContact(id);
//     dispatch(action);
  
   const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();
  
  const elements = filteredContacts.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListDeleteButton type="button" onClick={() => dispatch(removeContact(id))} >
          Delete
        </ListDeleteButton>
      </ListItem>
    );
  });
  return <List>{elements}</List>;
};

export default ContactList;


