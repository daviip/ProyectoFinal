import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { Prices } from '../components/Prices'

export default function Home({data}) {
  return (
    <div>
      <Header />
      <Slider />
      <Prices data={data}/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/tarifas')
  const data = await res.json()
  return { props: { data } }
}