import React, { createContext, useEffect, useState } from 'react';
import { GetAllLocalStorage } from '../services/localStorage/localStorage';


interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
  
  // Criação de contexto
  export const AppContext = createContext({} as IAppContext);
  

  // Criação do provider para passar o contexto para o restante da aplicação
  export const AppContextProvider = ({ children }: any) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const storage = GetAllLocalStorage();

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage);
        setIsLoggedIn(login)
      }
    }, [storage])

    
    const user = 'gabrielccg';


    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
  }