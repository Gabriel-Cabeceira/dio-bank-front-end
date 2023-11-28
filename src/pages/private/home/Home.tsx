import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardInfo } from './components/CardInfo';
import { useState, useEffect, useContext } from 'react';
import { api } from '../../../api';
import { AppContext } from '../../../contexts/AppContexts';


interface IUserData {
    id: string,
    email: string,
    password: string,
    name: string,
    balance: number
}

export const Home: React.FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState<null | IUserData>()

    // Using context
    const { isLoggedIn } = useContext(AppContext);


    // If "isLoggedIn is False, navigate to root "/""
    !isLoggedIn && navigate('/');

    useEffect(() => {
        const getData = async () => {
            
            const data: any = await api
            setUserData(data)
        }
        getData();
    }, [])


    const actualData = new Date();

    
    if(userData && id !== userData.id){
        navigate('/')
    }


    return(
        <SimpleGrid columns={2} spacing='1em'>

{
                userData === null || userData === undefined ? 
                    (
                        <Spinner size='xl' color='#FFFFFF' margin='3em'/>
                    ) :

                    (
                        <CardInfo
                            firstText={userData === null || userData === undefined ? 'Loading...' : userData.name}
                            secondText={`${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()} | ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />
                    )       
            }


            {
                userData === null || userData === undefined ? 
                    (
                        <Spinner size='xl' color='#FFFFFF' margin='3em'/>
                    ) :

                    (
                        <CardInfo
                            firstText='Saldo:'
                            secondText={userData === null || userData === undefined ? 'Loading...' : userData.balance.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        />
                    )       
            }

        </SimpleGrid>
    )
} 