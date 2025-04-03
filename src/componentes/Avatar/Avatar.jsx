import styles from "./Avatar.module.css";

function Avatar({ src, alt = "Avatar" }) {
  return <img className={styles.avatar} src={src} alt={alt} />;
}

export default Avatar;
