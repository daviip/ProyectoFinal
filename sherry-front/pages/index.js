import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Prices } from "../components/Prices";
import { Footer } from "../components/Footer";
import { Clases } from "../components/Clases";

export default function Home({ datap, datac }) {
  // console.log(window.localStorage.getItem("token"));
  return (
    <div>
      <Header />
      <Slider />
      <Prices data={datap} all={false} />
      <Clases data={datac} all={false} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch("http://localhost:5000/tarifas/all");
  const resc = await fetch("http://localhost:5000/clases/all");
  const datap = await resp.json();
  const datac = await resc.json();
  return { props: { datap, datac } };
}
