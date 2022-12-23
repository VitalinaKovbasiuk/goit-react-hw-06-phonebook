import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';
import { deleteContact  } from 'redux/contacts/contact-slice';

import { getContacts, getFilter } from 'redux/contacts/contact-slice';
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
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

  return (
    <List>
      {filteredContacts.map(
        ({
          id,
          name,
          number,
        }) => {
          return (
            <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListDeleteButton type="button" onClick={() => dispatch(deleteContact (id))} >
          Delete
        </ListDeleteButton>
      </ListItem>
          );
        }
      )}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
  


