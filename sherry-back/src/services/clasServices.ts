import { IClas } from '../types'
import classes from './clas.json'

const clases: IClas[] = classes as IClas[];

export const getClas = (): IClas[] => clases;

export const findClasById = (id: number): IClas | undefined => {
    const clase = clases.find(clase => clase.id === id);
    return clase;
}

