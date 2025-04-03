import { useState } from "react";
import styles from "./PostForm.module.css";

function PostForm({ agregarPost }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo.trim() && contenido.trim()) {
      agregarPost(titulo, contenido);
      setTitulo("");
      setContenido("");
    }
  };

  return (
    <form className={styles.formulario} onSubmit={manejarEnvio}>
      <input
        className={styles.input}
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />
      <button className={styles.boton} type="submit">Agregar Post</button>
    </form>
  );
}

export default PostForm;