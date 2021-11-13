import ContactListItem from './ContactListItem';

export default function ContactList({ list }) {
  console.log('Сработал ContactList');

  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
