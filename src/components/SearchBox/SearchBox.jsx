import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p className={css.item}>Find contacts by name</p>
      <input
        className={css.searchBox}
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
