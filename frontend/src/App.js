import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Box>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Box>
  );
};

export default App;
