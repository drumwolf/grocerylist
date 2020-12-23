import { Container, EntryForm, GroceryList, Item } from './Components';

function App() {
  const groceryList = ['pasta', 'eggs', 'almond butter'];

  return (
    <Container>
      <EntryForm />
      <GroceryList>
        {
          groceryList.map( (item, index) => <Item mt={ index ? '5px' : 0 }>{ item }</Item> )
        }
      </GroceryList>
    </Container>
  );
}

export default App;
