import styles from "../styles/Home.module.css";
import Image from "next/image";
import User from "../public/usuario.jpg";

export const PerfilUser = ({ user }) => {
    // user.reservas === undefined ? (user.reservas = 'No tienes reservas aún') : (user.reservas = user.reservas);
  console.log(user.reservas);
  return (
    <div>
      <h1 className={styles.title}>
        {user.nombre} {user.apellido}
      </h1>
      <hr className={styles.separador} />
      <div className={styles.perfil}>
        <div>
          <h3>Correo: {user.email}</h3>
          <h3>Telefono: {user.telefono}</h3>
          <h3>Tarifa: {user.tarifa}</h3>
          <h3> Reservas: {user.reservas}</h3>
        </div>
        <div>
          <Image src={User} width={200} height={200} alt="user" />
        </div>
      </div>
    </div>
  );
};
