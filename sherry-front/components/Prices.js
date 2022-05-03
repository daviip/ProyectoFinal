import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'

export const Prices = ({ data, all }) => {

    if (all) {
        tarifa3 = data
    } else {
        var tarifa3 = data.slice(0, 3)
    }

    return (
        <div>
            <h1 className={ styles.title }>Tarifas</h1>
            <hr className={ styles.separador } />
            <div className={ styles.prices }>
                {
                    tarifa3.map(item => (
                        <div className={ styles.box } key={ item.id }>
                            <Image src={ Logo } width={ 100 } height={ 90 } />
                            <p><strong>{ item.nombre }</strong></p>
                            <p><strong>{ item.precio }€</strong></p>
                        </div>
                    ))
                }

            </div>
            
        </div>
    )
}