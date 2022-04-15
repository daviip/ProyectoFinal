import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Listar({ data }) {
    console.log(data)
    return (
        <table className={ styles.table }>
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
                    <td>{ data[1].nombre }</td>
                    <td>{ data[3].nombre }</td>
                    <td>{ data[1].nombre }</td>
                    <td>{ data[3].nombre }</td>
                    <td>{ data[1].nombre }</td>
                </tr>
                <tr>
                    <th>10:00-11:00</th>
                    <td>{ data[2].nombre }</td>
                    <td>{ data[8].nombre }</td>
                    <td>{ data[3].nombre }</td>
                    <td>{ data[2].nombre }</td>
                    <td>{ data[6].nombre }</td>
                </tr>
                <tr>
                    <th>11:00-12:00</th>
                    <td>{ data[3].nombre }</td>
                    <td>{ data[1].nombre }</td>
                    <td>{ data[8].nombre }</td>
                    <td>{ data[8].nombre }</td>
                    <td>{ data[0].nombre }</td>
                </tr>
                <tr>
                    <th>12:30-13:00</th>
                    <td>{ data[5].nombre }</td>
                    <td>{ data[0].nombre }</td>
                    <td>{ data[5].nombre }</td>
                    <td>{ data[0].nombre }</td>
                    <td>{ data[5].nombre }</td>
                </tr>
                <tr>
                    <th>13:00-14:00</th>
                    <td>{ data[6].nombre }</td>
                    <td>{ data[4].nombre }</td>
                    <td>{ data[0].nombre }</td>
                    <td>{ data[4].nombre }</td>
                    <td>{ data[3].nombre }</td>
                </tr>
            </tbody>
        </table>
    )
}
