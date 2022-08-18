import React from 'react';
import { Combobox } from '@elegantui/forms';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

const ComboboxComponent = ({
  variant,
  hideLabel,
  disabled
}: {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  hideLabel?: boolean;
  disabled?: boolean;
}) => {
  const [person, setPerson] = React.useState(people[0]);
  const [query, setQuery] = React.useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div style={{ marginTop: '1rem', width: '15rem' }}>
      <Combobox
        name={variant ?? 'default'}
        label={
          variant
            ? `${variant.charAt(0).toUpperCase()}${variant.slice(1)}`
            : 'Combobox'
        }
        value={person}
        onChange={(p) => {
          setPerson(p as typeof person);
        }}
        variant={variant}
        hideLabel={hideLabel}
        disabled={disabled}
        inputChangeHandler={(e) => setQuery(e.target.value)}
        inputDisplayValue={(p) => (p as typeof person)?.name ?? ''}
      >
        {filteredPeople.map((person) => (
          <Combobox.Option
            key={person.id}
            optionText={person.name}
            value={person}
            disabled={person.unavailable}
          />
        ))}
      </Combobox>
    </div>
  );
};

export default ComboboxComponent;
