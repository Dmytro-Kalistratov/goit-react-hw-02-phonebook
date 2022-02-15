import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';
import PhonebookList from './PhonebookList';
import PhonebookFilter from './PhonebookFilter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Justice the Awesome Demon', number: '666-0-066' },
      { id: 'id-2', name: 'Lucifer the CEO of Hell', number: '999-1-111' },
      { id: 'id-3', name: 'Pandemonica the Tired Demon', number: '000-0-000' },
      { id: 'id-4', name: 'The Helltaker', number: '969-0-001' },
    ],
    filter: '',
  };

  onformSubmit = data => {
    const generateContactsId = nanoid();

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: generateContactsId,
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const filterNormalize = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterNormalize) ||
        contact.number.includes(filterNormalize)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h2>The Hell Phonebook</h2>
        <PhonebookForm onSubmit={this.onformSubmit} />
        <h2>Your Garem List</h2>
        <PhonebookFilter value={filter} onChange={this.onFilterChange} />
        <PhonebookList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
