import { Container, GroceryList, Item } from './Components';
import { Input } from "@chakra-ui/react";

function App() {
  const groceryList = ['pasta', 'eggs', 'almond butter'];

  return (
    <Container>
      <Input
        bg='white'
        color='black'
        placeholder="Basic usage"
      />
      <GroceryList>
        {
          groceryList.map( (item, index) => <Item mt={ index ? '5px' : 0 }>{ item }</Item> )
        }
      </GroceryList>
    </Container>
  );
}

export default App;
