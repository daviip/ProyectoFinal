import { Header } from '../components/Header'
import { Prices } from '../components/Prices'
import { Footer } from '../components/Footer'

export default function Tarifas({ data }) {
  return (
    <div>
      <Header />
      <Prices data={data} all={true}/>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/tarifas')
  const data = await res.json()
  return { props: { data } }
}