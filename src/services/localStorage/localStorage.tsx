
const diobank = {
    login: false
}

interface IDioBank {
    login: boolean
}

export const GetAllLocalStorage = (): string | null => {

    return localStorage.getItem('diobank')
} 

export const createLocalStorage = ():void => {
    localStorage.setItem('diobank', JSON.stringify(diobank));
}

export const changeLocalStorage = (dioBannk: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBannk));
}