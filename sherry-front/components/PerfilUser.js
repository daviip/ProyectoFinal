import styles from "../styles/Home.module.css";
import Image from "next/image";
import User from "../public/usuario.jpg";

export const PerfilUser = ({ user }) => {
  let reservase = [];
  user.reservas === []
    ? (reservase = ["No tienes reservas aún"])
    : (reservase = user.reservas);
  return (
    <div>
      {/* {console.log(reservas)} */}
      <h1 className={styles.title}>
        {user.nombre} {user.apellido}
      </h1>
      <hr className={styles.separador} />
      <div className={styles.perfil}>
        <div>
          <h3>Correo: {user.email}</h3>
          <h3>Telefono: {user.telefono}</h3>
          <h3>Tarifa: {user.tarifa}</h3>
          <h3>
            Reservas:
            {console.log(reservase)}
          </h3>
        </div>
        <div>
          <Image src={User} width={200} height={200} alt="user" />
        </div>
      </div>
    </div>
  );
};
