import { useContext } from 'react'
import { StyledHeader, DioBankTitle } from './header-styles'
import { AppContext } from '../../../contexts/AppContexts';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../../services/localStorage/localStorage';


export const Header: React.FC = () => {

    const { isLoggedIn } = useContext(AppContext);
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        changeLocalStorage({login: false});
        navigate('/')
    }


    return(
        <StyledHeader>
            <DioBankTitle>DIO Bank</DioBankTitle>

            {isLoggedIn ? 
                <Button marginRight='5em' onClick={logout}>Logout</Button> :
                null
            }
        </StyledHeader>
    )
}