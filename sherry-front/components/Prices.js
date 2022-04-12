import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'

export const Prices = () => {
    return (
        <div>
            <div className={ styles.prices }>
                <div className={ styles.box }>
                    <Image src={ Logo } width={ 100 } height={ 90 } />
                    <p>Mensual</p>
                    <p>26€</p>
                </div>
                <div className={ styles.box }>
                    <Image src={ Logo } width={ 100 } height={ 90 } />
                    <p>Trimestral</p>
                    <p>70€</p>
                </div>
                <div className={ styles.box }>
                    <Image src={ Logo } width={ 100 } height={ 90 } />
                    <p>Anual</p>
                    <p>250€</p>
                </div>
            </div>
            <div className={ styles.cen }>
                <button className={ styles.button }>Ver todas las tarifas</button>
            </div>
        </div>
    )
}