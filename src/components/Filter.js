import { v4 as uuidv4 } from 'uuid';

export default function Component({ value, onChange }) {
  return (
    <div>
      <label htmlFor={uuidv4()}>Find contacts by name</label>
      <input type="text" value={value} id={uuidv4()} onChange={onChange} />
    </div>
  );
}
