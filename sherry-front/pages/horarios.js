import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import Listar from "../components/Listar";
import { backend } from "../public/backend";
import { useEffect, useState } from "react";

export default function horarios({ data }) {
  const [isLogged, setIsLogged] = useState(false);
  const [clase, setClase] = useState("");
  const [dia, setDia] = useState("");
  let horarios = [];

  // Obtiene horarios
  data.find((item) => {
    if (item._id === clase) {
      horarios = item.horario;
    }
  });

  // Envia datos al servidor
  const sendData =  (clase, dia) => {}

  useEffect(() => {
    window.localStorage.getItem("token")
      ? setIsLogged(true)
      : setIsLogged(false);
  }, [isLogged]);

  return isLogged ? (
    <div>
      <Header />
      <h1 className={styles.title}>Horarios</h1>
      <hr className={styles.separador} />
      <div className={styles.containerTable}>
        <Listar data={data} />
      </div>
      <div className={styles.containerForm}>
        <form>
          <select
            name="clases"
            defaultValue={"Selecciona"}
            onChange={(e) => setClase(e.target.value)}
            className={styles.select}
          >
            <option value="">Selecciona</option>
            {data.map((item) => (
              <option value={item._id} key={item._id} className={styles.option}>
                {item.nombre}
              </option>
            ))}
          </select>
          <select
            name="dias"
            defaultValue={"Selecciona"}
            onChange={(e) => setDia(e.target.value)}
            className={styles.select}
          >
            <option value="">Selecciona</option>
            {horarios.map((item) => (
              <option value={item.dia} key={item.dia} className={styles.option}>
                {item.dia} a las {item.hora}:00
              </option>
            ))}
          </select>
          <button type="submit" className={styles.selectB} onClick={sendData(clase, dia)}>
            Agregar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  ) : (
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
