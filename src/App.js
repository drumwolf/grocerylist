import { useState } from 'react';
import { Container, EntryForm, GroceryList, Item } from './Components';

function App() {
  const [groceries, setGroceries] = useState({ pasta: true });

  const addItem = (item) => {
    const newGroceries = {...groceries}
    if (!newGroceries[item]) {
      newGroceries[item] = true;
      setGroceries(newGroceries)
    }
  }

  const onEntryFormSubmit = e => {
    e.preventDefault();
    const newItem = e.target[0].value.toLowerCase();
    e.target[0].value = '';
    addItem(newItem);
  }

  const onItemDelete = item => {
    const newGroceries = {...groceries};
    if (newGroceries[item]) { delete newGroceries[item] };
    setGroceries(newGroceries);
  }

  return (
    <Container>
      <EntryForm onSubmit={onEntryFormSubmit} />
      <GroceryList>
        {
          Object.keys(groceries).map((item, index) => <Item
            key={item}
            item={item}
            mt={ index ? '5px' : 0 }
            onDelete={onItemDelete}
          />)
        }
      </GroceryList>
    </Container>
  );
}

export default App;
