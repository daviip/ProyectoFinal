import Image from 'next/image'
import Logo from "../public/logo.png"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const Header = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.image }>
                <Image src={ Logo } width={ 130 } height={ 120 } />
            </div>  
            <div className={ styles.nav }>
                <div className={styles.navegator}>
                    <Link href="/">Inicio</Link>
                </div>              
                <div className={styles.navegator}>
                    <Link href="/tarifas">Tarifas</Link>
                </div>                
                <div className={styles.navegator}>
                    <Link href="/clases">Clases</Link>
                </div>                
                <div className={styles.navegator}>
                    <Link href="/horarios">Horarios</Link>
                </div>
                <div className={styles.navegator}>
                    <Link href="/informacion">Información</Link>
                </div>
            </div>
        </div>
    )
}