import {BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from './routes/routes';
import './App.css';
import { AppContextProvider } from './contexts/AppContexts'
import { Layout } from './shered/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { GetAllLocalStorage, createLocalStorage } from "./services/localStorage/localStorage";


function App() {

  if(!GetAllLocalStorage()){
    createLocalStorage();
  }


  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  );
}

export default App;

