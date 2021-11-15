import { useMemo } from 'react';
import { connect } from 'react-redux';

import ContactListItem from './ContactListItem';

function ContactList({ contacts, filter }) {
  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, contacts]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(ContactList);
