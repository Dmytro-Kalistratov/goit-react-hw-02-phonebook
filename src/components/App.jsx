import Phonebook from './Phonebook';

export const App = () => {
  return (
    <div>
      <Phonebook
        initialContacts={[
          {
            id: 'id-1',
            name: 'Justice the Awesome Demon',
            number: '666-0-066',
          },
          { id: 'id-2', name: 'Lucifer the CEO of Hell', number: '999-1-111' },
          {
            id: 'id-3',
            name: 'Pandemonica the Tired Demon',
            number: '000-0-000',
          },
          { id: 'id-4', name: 'The Helltaker', number: '969-0-001' },
        ]}
        initialFilter={''}
      />
    </div>
  );
};
