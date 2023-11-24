import { Input, Box, Center } from '@chakra-ui/react';
import './login-syles.css';
import { login } from '../../../services/login/login';
import { Button } from './components/Button/Button';

export const FormLogin: React.FC = () => {

    return(
        <Box className='box'>
            <form action="#">
                <Center margin='1em'>
                    <h1 className='title-login'>Login</h1>
                </Center>
                
                <Center className='center-container'>
                    <Input className='input-styles' placeholder='Email:' type='email'/>
                    <Input className='input-styles' placeholder='Senha:' type='password'/>
                </Center>

                <Button
                    textContent='Entrar'
                    onClick={login}
                />

            </form>
        </Box>
    )
}
