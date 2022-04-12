import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { Prices } from '../components/Prices'

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Prices />
  
    </div>
  )
}
