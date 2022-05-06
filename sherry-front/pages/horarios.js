import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import Listar from "../components/Listar";
import { backend } from "../public/backend";

export default function horarios({ data }) {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Horarios</h1>
      <hr className={styles.separador} />
      <div className={styles.containerTable}>
        <Listar data={data} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(backend + "/clases/all");
  const data = await res.json();
  return { props: { data } };
}
