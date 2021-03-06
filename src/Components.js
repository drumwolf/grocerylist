import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Tag,
  TagLabel,
  TagCloseButton
} from "@chakra-ui/react";

export const Container = (props) => <Box
  as='main'
  m='40px auto'
  w='550px'
  {...props}
/>

export const EntryForm = ({ onSubmit }) => <Flex as='form' onSubmit={onSubmit}>
  <Input
    bg='white'
    color='black'
    placeholder="Enter item to be added to grocery list"
    mr='8px'
  />
  <Button type='submit' colorScheme='green'>Add Item</Button>
</Flex>

export const GroceryList = (props) => <List
  borderRadius='8px'
  bg='blue.400'
  mt='10px'
  p='10px'
  {...props}
/>

export const Item = ({ item, onDelete, ...rest }) => <ListItem {...rest}>
  <Tag size='lg'>
    <TagLabel>{ item }</TagLabel>
    <TagCloseButton onClick={() => onDelete(item)} />
  </Tag>
</ListItem>