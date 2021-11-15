import { connect } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-actions';

function ContactList({ id, name, number, deleteContact }) {
  // console.log('id: ', id);
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        id={id}
        onClick={() => {
          // console.log('id in onClick: ', id);
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
