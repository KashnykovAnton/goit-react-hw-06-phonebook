import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { filterContact } from '../redux/contacts/contacts-actions';

function Component({ filter, filterContact }) {
  const changeFilter = useCallback(
    e => {
      filterContact(e.target.value);
    },
    [filterContact],
  );

  return (
    <div>
      <label htmlFor={uuidv4()}>Find contacts by name</label>
      <input type="text" value={filter} id={uuidv4()} onChange={changeFilter} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = { filterContact };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
