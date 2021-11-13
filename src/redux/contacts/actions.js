export const addContact = contact => ({
  type: 'contacts/add',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'contacts/delete',
  payload: { id },
});

export const filterContact = filter => ({
  type: 'contacts/filter',
  payload: { filter },
});
