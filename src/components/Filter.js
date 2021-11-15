import { v4 as uuidv4 } from 'uuid';
// import { connect } from 'react-redux';
// import { filterContact } from '../redux/contacts/contacts-actions';

export default function Component({ value, onChange }) {
  // const changeFilter = useCallback(
  //   e => {
  //     const value = e.target.value;
  //     filterContact({ value });
  //   },
  //   [filterContact],
  // );

  return (
    <div>
      <label htmlFor={uuidv4()}>Find contacts by name</label>
      <input type="text" value={value} id={uuidv4()} onChange={onChange} />
    </div>
  );
}
