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

export default PhonebookList;
