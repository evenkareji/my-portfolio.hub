import styles from '../styles/post-body.module.css';

export default function PostBodyCss({ children }) {
  return <div className={styles.stack}>{children}</div>;
}
