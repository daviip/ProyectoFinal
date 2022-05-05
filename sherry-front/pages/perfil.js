import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { PerfilUser } from "../components/PerfilUser";

export default function Perfil() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/users/"+token, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            setUser(data);
          }
        });
    }
  }, [token]);

  return (
    <div>
      <Header />
        <PerfilUser user={user} />
      <Footer />
    </div>
  );
}
