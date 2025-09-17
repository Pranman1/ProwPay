import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="linear-gradient(135deg, #4A3AFF 0%, #2B89FF 100%)"
        color="white"
        pt={{ base: 24, md: 32 }}
        pb={{ base: 20, md: 32 }}
      >
        <Container maxW="container.xl">
          <Stack spacing={8} maxW="2xl">
            <Stack spacing={4}>
              <Heading
                fontSize={{ base: '4xl', md: '7xl' }}
                fontWeight="black"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                Modern Payment
                <br />
                Solutions
                <Box
                  as="span"
                  position="relative"
                  ml={4}
                  _after={{
                    content: '""',
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'whiteAlpha.300',
                    zIndex: -1,
                  }}
                >
                  for the
                </Box>
                <br />
                <Text
                  as="span"
                  color="whiteAlpha.800"
                >
                  Digital Age
                </Text>
              </Heading>
            </Stack>
            
            <Text fontSize={{ base: 'lg', md: '2xl' }} opacity="0.9" maxW="xl" lineHeight="1.5">
              Streamline your payments, enhance your business. Simple, secure,
              and designed for modern commerce.
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={4}>
              <Button
                size="lg"
                bg="white"
                color="brand.primary"
                px={8}
                fontSize="md"
                fontWeight="bold"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                  bg: 'whiteAlpha.900',
                }}
                transition="all 0.2s"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                px={8}
                fontSize="md"
                fontWeight="bold"
                borderWidth={2}
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lg',
                  bg: 'whiteAlpha.200',
                }}
                transition="all 0.2s"
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Stack spacing={16}>
            <Stack spacing={4} textAlign="center">
              <Text
                color="brand.primary"
                fontWeight="bold"
                fontSize="lg"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Features
              </Text>
              <Heading 
                size="2xl" 
                letterSpacing="tight"
                bgGradient="linear(to-r, brand.primary, brand.secondary)"
                bgClip="text"
              >
                Everything you need to accept payments
              </Heading>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;