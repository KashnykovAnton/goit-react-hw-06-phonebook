import { connect } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-actions';

function ContactList({ id, name, number, deleteContact }) {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        id={id}
        onClick={() => {
          deleteContact({ id });
        }}
      >
        Delete
      </button>
    </li>
  );
}

const mapDispatchToProps = { deleteContact };

export default connect(null, mapDispatchToProps)(ContactList);
