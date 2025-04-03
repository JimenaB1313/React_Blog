import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Publicaciones from "./paginas/Publicaciones";
import Header from "./componentes/Header/Header";
import Avatar from "./componentes/Avatar/Avatar";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Avatar src="catavatar.jpg" alt="Usuario" />
        </Header>
        <div className={styles.contenedor}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publicaciones" element={<Publicaciones />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;