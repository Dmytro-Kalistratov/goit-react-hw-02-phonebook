import PropTypes from 'prop-types';

const PhonebookList = props => {
  const { contacts } = props;
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PhonebookList;
