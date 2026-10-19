import styles from "./home.module.css";

import Dashboard from "../../component/dashboard/dashboard";
import InputScreenshot from "../../component/inputScreenshot/inputScreenshot";

export default function Home() {
  return (
    <>
      <div className={styles.global}>
        <header>
          <h1>
            <span style={{ color: "blue" }}>ScreenShots</span> to{" "}
            <span style={{ color: "var(--color1)" }}>PDF</span>
          </h1>
          <h1>
            Made by <a href="https://github.com/Everton45HH">Everton</a>
          </h1>
        </header>

        <main>
          <Dashboard className={styles.dashboard} />
        </main>

        <footer>
          Biblioteca utilizada  
          <a href="https://github.com/pqina/react-filepond" style={{"color" : "blue"}}> react-filepond</a>
        </footer>
      </div>
    </>
  );
}
