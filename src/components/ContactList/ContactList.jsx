import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';
import { removeContact } from 'redux/contacts/contact-slice';

// const onRemoveContact = id => {
//   const action = removeContact(id);
//     dispatch(action);
// };
  
const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) => {
      const normalizeName = name.toLocaleLowerCase();
      const result = normalizeName.includes(normalizeFilter);
      return result;
    });
    return filterContacts;
  };

  const filteredContacts = getFilteredContacts();

const ContactList = ({ items, removeContact }) => {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListDeleteButton type="button" onClick={() => removeContact(id)}>
          Delete
        </ListDeleteButton>
      </ListItem>
    );
  });
  return <List>{elements}</List>;
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
