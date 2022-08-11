# ElegantUI Forms Combobox component

## Installation

```bash
npm i @elegantui/forms
```

## Usage

```jsx
import { Combobox } from '@elegantui/forms';
import { useState } from 'react';

function Component() {
  const [person, setPerson] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
  <Combobox
    name='Default'
    label='Combobox'
    value={person}
    disabled={disabled}
    onChange={(p) => {
      setPerson(p as typeof person);
    }}
    variant={variant}
    inputChangeHandler={(e) => setQuery(e.target.value)}
  >
    {filteredPeople.map((person) => (
      <Combobox.Option key={person} optionText={person} value={person} />
    ))}
  </Combobox>
);
}
```

## License

MIT © [Manan Joshi](https://mananjoshi.me)
