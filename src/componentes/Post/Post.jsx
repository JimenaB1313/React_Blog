import styles from "./Post.module.css";

function Post({ post, eliminarPost }) {
  return (
    <div className={styles.post}>
      <h2 className={styles.titulo}>{post.title}</h2>
      <p>{post.body}</p>
      <button className={styles.botonEliminar} onClick={() => eliminarPost(post.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default Post;