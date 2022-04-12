import Image from 'next/image'
import Logo from "../public/logo.png"
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export const Footer = () => {
    return (
        <div className={ styles.containerFooter }>
            <div className={ styles.image }>
                <Image src={ Logo } width={ 130 } height={ 120 } />
            </div>
            <div className={ styles.info }>
                <span className={ styles.parainfo }>Para mas info</span><br />
                <span>informatica@iesromerovargas.com</span><br />
                <span>C. Moreno Mendoza, 4, 11408 Jerez de la Frontera, Cádiz</span><br />
                <span>654123987</span>
            </div>
            <div className={ styles.interes }>
                <div>
                    <Link href="/normativa-del-centro">Normativa del centro</Link>
                </div>
                <div>
                    <Link href="/politica-de-privacidad">Politica de privacidad</Link>
                </div>
                <div>
                    <Link href="/politica-de-cookies">Politica de cookies</Link>
                </div>
                <div>
                    <Link href="/aviso-legal">Aviso legal</Link>
                </div>
            </div>
        </div>
    )
}