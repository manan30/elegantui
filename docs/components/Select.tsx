import React from 'react';
import { Select } from '@elegantui/forms';

const SelectComponent = ({
  variant
}: {
  variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
}) => {
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
  ];

  const [person, setPerson] = React.useState(people[0]);

  return (
    <div style={{ marginTop: '1rem', width: '15rem' }}>
      <Select
        name='Default'
        label={
          variant
            ? `${variant.charAt(0).toUpperCase()}${variant.slice(1)}`
            : 'Select'
        }
        selectedText={person.name}
        value={person}
        onChange={p => {
          setPerson(p as typeof person);
        }}
        variant={variant}
      >
        {people.map(person => (
          <Select.Option
            key={person.id}
            optionText={person.name}
            value={person}
            disabled={person.unavailable}
          />
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
