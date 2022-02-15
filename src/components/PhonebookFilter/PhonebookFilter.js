const PhonebookFilter = props => {
  const { value, onChange } = props;
  return (
    <label>
      Who you gonna call?
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default PhonebookFilter;