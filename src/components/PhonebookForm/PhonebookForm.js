import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class PhonebookForm extends Component {
  state = {
    filter: '',
    name: 'Malina',
    number: '333-9-333',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  addContactTo = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const generateNameId = nanoid();
    const generateNumberId = nanoid();

    return (
      <form onSubmit={this.addContactTo}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={generateNameId}
            onChange={this.inputChange}
            required
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={generateNumberId}
            onChange={this.inputChange}
            required
          />
        </label>
        <button type="submit">Add new contact</button>
      </form>
    );
  }
}

export default PhonebookForm;
