import { Login } from './login';


const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

// Estrutura que faz um mock do useContext para realizar os testes
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))


// Estrutura que faz um mock do useNavigate para realizar os testes
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {
    
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail: string = 'gabriel@dio.com';
    const mockPassword: string = 'Senha123'

    it('It must give an alert if email and password is valid', async () => {
        const response = await Login(mockEmail, mockPassword);
        expect (response).toBeTruthy();
    })

    it('It must give the alert email or password is invalid', async () => {
        const response = await Login('teste@teste.com', mockPassword);
        expect (response).toBeFalsy();
    })
})