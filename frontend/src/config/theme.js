import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900',
      },
    },
  },
  colors: {
    brand: {
      // Vibrant blue gradient colors
      primary: '#4A3AFF',
      secondary: '#2B89FF',
      accent: '#84A9FF',
      // Background gradients
      gradient: {
        start: '#4A3AFF',
        end: '#2B89FF',
      },
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'xl',
      },
      variants: {
        gradient: {
          bg: 'linear-gradient(135deg, #4A3AFF 0%, #2B89FF 100%)',
          color: 'white',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.2s',
        },
      },
    },
  },
})

export default theme;