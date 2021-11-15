import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');

// ---- VANILLA REDUX ---- //

// import { types } from './contacts-types';

// export const types = {
//   ADD: 'contacts/add',
//   DEL: 'contacts/delete',
//   FILTER: 'contacts/filter',
// };

// export const addContact = contact => ({
//   type: types.ADD,
//   payload: contact,
// });

// export const deleteContact = id => ({
//   type: types.DEL,
//   payload: { id },
// });

// export const filterContact = filter => ({
//   type: types.FILTER,
//   payload: { filter },
// });
