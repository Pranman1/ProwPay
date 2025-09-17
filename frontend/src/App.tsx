import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <Heading mb={4}>Welcome to ProwPay</Heading>
        <Text fontSize="lg">Your modern payment solution.</Text>
      </Container>
    </Box>
  );
};

export default App;