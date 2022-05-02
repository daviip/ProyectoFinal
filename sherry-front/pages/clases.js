import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'
import { Clases } from '../components/Clases'

export default function clases({ data }) {

    return (
        <div>
            <Header />
            <h1 className={ styles.title }>Clases</h1>
            <hr className={ styles.separador } />
            <div className={ styles.containerTable }>
                <Clases data={ data }/>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:5000/clases')
    const data = await res.json()
    return { props: { data } }
}