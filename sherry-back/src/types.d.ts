export interface IUser {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    dni: string;
    telefono: number;
}

export interface ICost{
    id: number;
    nombre: string;
    precio: number;
}

export interface IClas{
    id: number;
    nombre: string;
    modalidad: string;
    duracion: number;
    intensidad: string;
    descripcion: string; 
}