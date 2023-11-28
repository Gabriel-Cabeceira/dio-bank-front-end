const conta = {
    id: '1',
    email: 'gabriel@dio.com',
    password: 'Senha123',
    name: 'Gabriel Cabeceira',
    balance: 4500000
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})

