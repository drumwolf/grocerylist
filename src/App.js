import { Box, Input, List, ListItem, Tag, TagLabel } from "@chakra-ui/react";

function App() {
  return (
    <Box
      as='main'
      m='40px auto'
      w='480px'
    >
      <Input
        bg='white'
        color='black'
        placeholder="Basic usage"
      />
      <Box
        borderRadius='8px'
        bg='blue.400'
        mt='20px'
        p='10px'
      >
        <List>
          <ListItem mb='5px'>
            <Tag size='lg'>
              <TagLabel>Green</TagLabel>
            </Tag>
          </ListItem>
          <ListItem mb='5px'>
            <Tag size='lg'>
              <TagLabel>Green</TagLabel>
            </Tag>
          </ListItem>
          <ListItem mb='5px'>
            <Tag size='lg'>
              <TagLabel>Green</TagLabel>
            </Tag>
          </ListItem>
          <ListItem>
            <Tag size='lg'>
              <TagLabel>Green</TagLabel>
            </Tag>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default App;
