import React from 'react';
import { Box, Flex, Text, Link, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box 
      py={4}
      bg="white"
      borderBottom="1px"
      borderColor="gray.100"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backdropFilter="blur(5px)"
      backgroundColor="rgba(255, 255, 255, 0.95)"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Text
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight="black"
              letterSpacing="tight"
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
              _hover={{
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s"
            >
              ProwPay
            </Text>
          </Flex>
          
          <Flex alignItems="center" gap={8}>
            <Link
              as={RouterLink}
              to="/features"
              color="gray.700"
              fontWeight="medium"
              _hover={{
                color: 'brand.primary',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s"
            >
              Features
            </Link>
            <Link
              as={RouterLink}
              to="/pricing"
              color="gray.700"
              fontWeight="medium"
              _hover={{
                color: 'brand.primary',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s"
            >
              Pricing
            </Link>
            <Link
              as={RouterLink}
              to="/docs"
              color="gray.700"
              fontWeight="medium"
              _hover={{
                color: 'brand.primary',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s"
            >
              Docs
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;