import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Walking from "../public/imagesC/1.jpg";
import Ciclo from "../public/imagesC/2.jpg";
import ForTraining from "../public/imagesC/3.jpg";
import BodyCombat from "../public/imagesC/4.jpg";
import Pilates from "../public/imagesC/5.jpg";
import Yoga from "../public/imagesC/6.jpg";
import CrossTraining from "../public/imagesC/7.jpg";
import BodyPump from "../public/imagesC/8.jpg";
import Zumba from "../public/imagesC/9.jpg";

let img = [
  Walking,
  Ciclo,
  ForTraining,
  BodyCombat,
  Pilates,
  Yoga,
  CrossTraining,
  BodyPump,
  Zumba,
];

export const Clases = ({ data, all }) => {
  if (all) {
    clases3 = data;
  } else {
    var clases3 = data.slice(0, 3);
  }

  return (
    <div>
      <h1 className={styles.title}>Clases</h1>
      <hr className={styles.separador} />
      <div className={styles.prices}>
        {clases3.map((c, index) => (
          <div className={styles.box} key={c._id}>
            <Link href={"/clases/[id]"} as={`/clases/${c.nombre}`}>
              <a>
                <Image src={img[index]} width={200} height={200} />
                <h2>{c.nombre}</h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {all == false ? (
        <Link href={"/clases"}>
          <div className={styles.cen}>
            <button className={styles.button}>Ver todas las clases</button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};
