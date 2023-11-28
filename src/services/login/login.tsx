import { useContext } from 'react';
import { api } from '../../api';
import { AppContext } from '../../contexts/AppContexts';
import { useNavigate } from 'react-router-dom';


export const Login = async (email: string, password: string): Promise<boolean> => {

    const data: any = await api;

    if(email !== data.email || password !== data.password){
        return false
    }

    return true
}