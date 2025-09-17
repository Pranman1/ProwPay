import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="white" px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Heading size="md" as={RouterLink} to="/">
            ProwPay
          </Heading>
        </Flex>
        
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" mr={4}>
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
