import './App.css';
import { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import Section from './components/Section';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import { addContact, filterContact } from './redux/contacts/contacts-actions';

function App({ contacts, filter, addContact, filterContact }) {
  const formSubmitHandler = item => {
    const normalizedName = item.name.toLowerCase();
    contacts.find(el => {
      return el.name.toLowerCase() === normalizedName;
    })
      ? alert(`${item.name} is already in contacts`)
      : changeContacts(item);
  };

  const changeContacts = item => {
    addContact(item);
    console.log('item:', item);
  };

  const changeFilter = useCallback(
    e => {
      const value = e.target.value;
      filterContact(value);
    },
    [filterContact],
  );

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, contacts]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={changeFilter} />
        {/* <Filter value={filterValue} onChange={changeFilter} /> */}
        <ContactList list={filteredContacts} />
      </Section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = { addContact, filterContact };

export default connect(mapStateToProps, mapDispatchToProps)(App);
