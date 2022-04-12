import { IUser } from '../types'
import users from './users.json'

const socios: IUser[] = users as IUser[];

export const getUser = (): IUser[] => socios

export const findUserById = (id: number): IUser | undefined => {
    const socio = socios.find(socio => socio.id === id);
    return socio;
}

