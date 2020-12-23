import { Container, GroceryList, Item } from './Components';
import { Input } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <Input
        bg='white'
        color='black'
        placeholder="Basic usage"
      />
      <GroceryList>
        <Item mb='5px'>Green</Item>
        <Item mb='5px'>Green</Item>
        <Item mb='5px'>Green</Item>
        <Item mb='5px'>Green</Item>
        <Item>Green</Item>
      </GroceryList>
    </Container>
  );
}

export default App;
