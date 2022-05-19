import styles from "../styles/Home.module.css";
import Image from "next/image";
import borrarF from "../public/borrar.png";
import { backend } from "../public/backend";

export const PerfilUser = ({ user, data }) => {
  let texto = [];
  let nd = [];
  data.map((horarios) => {
    horarios.horario.map((h) => {
      h.reserva.map((r) => {
        if (r.includes(user._id)) {
          if (!texto.includes(horarios.nombre +", el " + h.dia+  " a las " + h.hora + ":00")) {
            texto.push(horarios.nombre +", el " + h.dia+  " a las " + h.hora + ":00");
            nd.push([horarios.nombre, h.dia]);
          }
        }
      });
    });
  });

  const borrar = (nombre, dia) => {
    fetch(backend + "/clases/reservaD/" + nombre, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        dia: dia,
        token: localStorage.getItem("token")
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Reserva eliminada");
        }
      });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const pregunta = (nombre, dia) => {
    if(confirm("¿Estas seguro de querer borrar la reserva de una clase de " + nombre + " el " + dia +"?")) {
      borrar(nombre, dia);
    }
  };

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
                return (
                  <p key={i}>
                    {t}{" "}
                    <span onClick={() => pregunta(nd[i][0], nd[i][1])}>
                      <Image
                        src={borrarF}
                        width={20}
                        height={20}
                        alt="borrar"
                      />
                    </span>
                  </p>
                );
              })}
            </div>
          </h3>
        </div>
        <div>
          <button className={styles.button}>
            <a>Editar Perfil</a>
          </button>
        </div>
      </div>
    </div>
  );
};
