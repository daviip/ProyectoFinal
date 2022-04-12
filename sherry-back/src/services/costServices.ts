import { ICost } from '../types'
import cost from './cost.json'


const tarifas : ICost[] = cost as ICost[];

export const getCost = (): ICost[] => tarifas
