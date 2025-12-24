import styles from "./Head.module.css";
import "aos/dist/aos.css";
import Container from "../container/Container";

export default function Head({id, children }) {
  return (
    <div  data-aos="zoom-in" id={id} className={styles.head}>
      <Container>
        <div className={styles.header}>
          <h1>{children}</h1>
        </div>
      </Container>
    </div>
  );
}
