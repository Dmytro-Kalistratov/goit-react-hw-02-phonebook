import PropTypes from 'prop-types';

const PhonebookFilter = props => {
  const { value, onChange } = props;
  return (
    <label>
      Who you gonna call?
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

PhonebookFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhonebookFilter;
