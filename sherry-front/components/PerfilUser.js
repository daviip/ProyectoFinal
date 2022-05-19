import styles from "../styles/Home.module.css";
import Image from "next/image";
import User from "../public/usuario.jpg";

export const PerfilUser = ({ user, data }) => {
  let texto = [];
  data.map((horarios) => {
    horarios.horario.map((h) => {
      h.reserva.map((r) => {
        if (r.includes(user._id)) {
          if (!texto.includes(horarios.nombre + " a las " + h.hora + ":00")) {
            texto.push(horarios.nombre + " a las " + h.hora + ":00");
          }
        }
      });
    });
  });

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
          <h3>
            Reservas:
            <div className={styles.marginn}>
              {texto.map((t, i) => {
                return <p key={i}>{t}</p>;
              })}
            </div>
          </h3>
        </div>
        <div>
          <Image src={User} width={200} height={200} alt="user" />
        </div>
      </div>
    </div>
  );
};
