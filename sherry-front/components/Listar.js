import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Listar({ data }) {

    const Lista = (data) => {
        data.map((c) => {
            c.horario.map((h) => {
                // console.log(`La clase ${c.nombre} se da el ${h.dia} a las ${h.hora}`);
            })
        })
    }

    useEffect(() => {
        Lista(data)
    }, [data])


    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Horario</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>09:00-10:00</th>
                        <td id="Lunes9" >{data[1].nombre}</td>
                        <td id="Martes9">{data[3].nombre}</td>
                        <td id="Miercoles9">{data[1].nombre}</td>
                        <td id="Jueves9">{data[3].nombre}</td>
                        <td id="Viernes9">{data[1].nombre}</td>
                    </tr>
                    <tr>
                        <th>10:00-11:00</th>
                        <td id="Lunes10">{data[2].nombre}</td>
                        <td id="Martes10">{data[8].nombre}</td>
                        <td id="Miercoles10">{data[3].nombre}</td>
                        <td id="Jueves10">{data[2].nombre}</td>
                        <td id="Viernes10">{data[6].nombre}</td>
                    </tr>
                    <tr>
                        <th>11:00-12:00</th>
                        <td id="Lunes11">{data[3].nombre}</td>
                        <td id="Martes11">{data[1].nombre}</td>
                        <td id="Miercoles11">{data[8].nombre}</td>
                        <td id="Jueves11">{data[8].nombre}</td>
                        <td id="Viernes11">{data[0].nombre}</td>
                    </tr>
                    <tr>
                        <th>12:00-13:00</th>
                        <td id="Lunes12">{data[5].nombre}</td>
                        <td id="Martes12">{data[0].nombre}</td>
                        <td id="Miercoles12">{data[5].nombre}</td>
                        <td id="Jueves12">{data[0].nombre}</td>
                        <td id="Viernes12">{data[5].nombre}</td>
                    </tr>
                    <tr>
                        <th>13:00-14:00</th>
                        <td id="Lunes13">{data[6].nombre}</td>
                        <td id="Martes13">{data[4].nombre}</td>
                        <td id="Miercoles13">{data[0].nombre}</td>
                        <td id="Jueves13">{data[4].nombre}</td>
                        <td id="Viernes13">{data[3].nombre}</td>
                    </tr>
                </tbody>
            </table>
            {Lista(data)}
        </div>
    )
}
