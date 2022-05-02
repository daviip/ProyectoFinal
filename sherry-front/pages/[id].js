import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import i1 from '../public/imagesC/1.jpg'



export default function Class({ data, nombre }) {

    if (!data) {
        return <div>loading...</div>
    } else {
        return (
            <div>
                <Header />
                <div>
                    <h1 className={ styles.title }>Clases</h1>
                    <hr className={ styles.separador } />
                    <div className={styles.porClases}>
                        <Image src={ i1 } width={ 200 } height={ 200 } />
                        <div>
                        <h2>{ data.nombre }</h2>
                        <p>Intensidad: {data.intensidad}</p>
                        <p>{ data.descripcion }</p>

                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params
    console.log(params)
    const res = await fetch('http://localhost:5000/clases/' + id)
    const data = await res.json()
    return { props: { data } }
}