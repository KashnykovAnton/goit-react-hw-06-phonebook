import { combineReducers } from 'redux';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: 4591256 },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilter = '';

const contactList = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return [...state, payload];
    case 'contacts/delete':
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const contactFilter = (state = initialFilter, { type, payload }) => {
  switch (type) {
    case 'contacts/filter':
      return (state = payload.filter);
    default:
      return state;
  }
};

export const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
});