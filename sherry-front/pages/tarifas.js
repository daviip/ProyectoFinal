import { Header } from '../components/Header'
import { Prices } from '../components/Prices'
import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'




export default function Tarifas({ data }) {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Tarifas</h1>
      <div className={ styles.pricess }>
          {
            data.map(item => (
              <div className={ styles.boxx } key={item.id}>
              <Image src={ Logo } width={ 100 } height={ 90 } />
              <p>{item.nombre}</p>
              <p>{item.precio}€</p>
            </div>
            ))
          }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/tarifas')
  const data = await res.json()
  return { props: { data } }
}