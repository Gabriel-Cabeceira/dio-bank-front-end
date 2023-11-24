import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import { Layout } from './shered/Layout/Layout';
import { FormLogin } from './pages/public/login/Login';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<FormLogin />}/>
          </Routes>
        </Router>
      </Layout>
    </ChakraProvider>
  );
}

export default App;

