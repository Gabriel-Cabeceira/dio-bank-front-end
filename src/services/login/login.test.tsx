import { login } from './login'


describe('login', () => {
    
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    it('It must give an alert: "Welcome to DIO Bank!"', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Welcome to DIO Bank!')
    })
})