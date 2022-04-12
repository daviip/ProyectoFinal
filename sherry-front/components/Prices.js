import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'

export const Prices = ({data}) => {

    var tarifa3 = data.slice(0,3)

    return (
        <div>
            <div className={ styles.prices }>
                <div></div>
                {
                    tarifa3.map(item => (
                        <div className={ styles.box } key={ item.id }>
                            <Image src={ Logo } width={ 100 } height={ 90 } />
                            <p>{ item.nombre }</p>
                            <p>{ item.precio }€</p>
                        </div>       
                    ))
                }
            </div>
            <div className={ styles.cen }>
                <button className={ styles.button }>Ver todas las tarifas</button>
            </div>
        </div>
    )
}