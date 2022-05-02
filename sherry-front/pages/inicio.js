import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Inicio() {
    return (
        <div>
            <Header />
            <h1 className={ styles.title }>Iniciar Sesión</h1>
            <hr className={ styles.separador } />
            <div className={ styles.inicio }>
                <form>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" required /><br></br><br></br>
                    <label for="Password">Password</label>
                    <input type="password" name="password" id="password" required /><br></br><br></br>
                    <input type="submit" value="Iniciar sesión" className={ styles.loginB } />
                </form>
            </div>
            <Footer />
        </div>
    )
}