import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header({ children }) {
  const navegar = useNavigate();

  return (
    <header className={styles.header}>
        <h1 className={styles.titulo}>Mi Blog Personal</h1>
        <button onClick={() => navegar("/")}>Volver al inicio</button>
        <button onClick={() => navegar("/publicaciones")}>Ver posts</button>
        {children}
    </header>
  );
}

export default Header;