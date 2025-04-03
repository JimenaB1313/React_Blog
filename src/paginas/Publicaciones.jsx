import { useState, useEffect } from "react";
import Post from "../componentes/Post/Post";
import PostForm from "../componentes/PostForm/PostForm";
import styles from "../App.module.css";

function Publicaciones() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const agregarPost = (titulo, contenido) => {
    const nuevoPost = { id: Date.now(), title: titulo, body: contenido };
    setPosts([nuevoPost, ...posts]);
  };

  const eliminarPost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
      <div>
        <PostForm agregarPost={agregarPost} />
        {posts.length > 0 ? (
          <div className={styles.listaPosts}>
            {posts.map((post) => (
              <Post key={post.id} post={post} eliminarPost={eliminarPost} />
            ))}
          </div>
        ) : (
          <p className={styles.mensajeVacio}>No hay posts aún.</p>
        )}
      </div>
  );
}

export default Publicaciones;