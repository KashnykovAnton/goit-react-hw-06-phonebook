import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-actions';

export default function ContactList({ id, name, number }) {
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        id={id}
        onClick={() => {
          onDelete({ id });
        }}
      >
        Delete
      </button>
    </li>
  );
}

// ---- VANILLA REDUX ---- //

// import { connect } from 'react-redux';

// function ContactList({ id, name, number, deleteContact }) {
//   return (
//     <li>
//       <span>{name}:</span>
//       <span>{number}</span>
//       <button
//         type="button"
//         id={id}
//         onClick={() => {
//           deleteContact({ id });
//         }}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }

// const mapDispatchToProps = { deleteContact };

// export default connect(null, mapDispatchToProps)(ContactList);
