import { combineReducers } from 'redux';
import { types } from './contacts-types';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: 4591256 },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilter = '';

const contactList = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DEL:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const contactFilter = (state = initialFilter, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      // return (state = payload.filter);
      return payload;
    default:
      return state;
  }
};

export const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
});

// export const contactReducer = combineReducers({
//   contacts,
//   filter
// });
