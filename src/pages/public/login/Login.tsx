import { Input, Box, Center } from '@chakra-ui/react';
import './login-syles.css';
import { Login } from '../../../services/login/login';
import { Button } from './components/Button/Button';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContexts';
import { changeLocalStorage } from '../../../services/localStorage/localStorage';


export const FormLogin: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, password: string) => {
        const login = await Login(email, password);

        if(!login){
            alert('Email ou senha inválidos');
        } else {
            setIsLoggedIn(true);
            changeLocalStorage({login: true})
            navigate('/home/1');          
        }

    }


    return(
        <Box className='box'>
            <form action="#">

                <Center margin='1em'>
                    <h1 className='title-login'>Login</h1>
                </Center>
                
                <Center className='center-container'>
                    <Input className='input-styles' placeholder='Email:' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input className='input-styles' placeholder='Senha:' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Center>

                <Button
                    type='submit'
                    textContent='Entrar'
                    onClick={() => validateUser(email, password)}
                />

            </form>
        </Box>
    )
}
