import { Box, Input, List, ListItem, Tag, TagLabel } from "@chakra-ui/react";

export const Container = (props) => <Box
  as='main'
  m='40px auto'
  w='480px'
  {...props}
/>

export const GroceryList = (props) => <List
  borderRadius='8px'
  bg='blue.400'
  mt='20px'
  p='10px'
  {...props}
/>

export const Item = ({ children, ...rest }) => <ListItem {...rest}>
  <Tag size='lg'>
    <TagLabel>{ children }</TagLabel>
  </Tag>
</ListItem>