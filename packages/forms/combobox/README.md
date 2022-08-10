# ElegantUI Forms Combobox component

## Installation

```bash
npm i @elegantui/forms
```

## Usage

```jsx
import { Combobox } from '@elegantui/forms';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

function Component() {
  const [person, setPerson] = useState(people[0]);

  return (
    <Combobox
      name='Default'
      label='Select'
      selectedText={person.name}
      value={person}
      onChange={(p) => {
        setPerson(p as typeof person);
      }}
    >
      {people.map((person) => (
        <Combobox.Option
          key={person.id}
          optionText={person.name}
          value={person}
          disabled={person.unavailable}
        />
      ))}
    </Combobox>
  );
}
```

## License

MIT © [Manan Joshi](https://mananjoshi.me)
