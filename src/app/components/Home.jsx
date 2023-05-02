import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

function Homes() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h1 className={styles.h1}>Somos una HR tech: acercamos soluciones</h1>
        <h3 className={styles.h3}>
          Nuestro objetivo es brindar soluciones tecnológicas para el mercado
          laboral en toda la región.
        </h3>
        <button className={styles.button}>
          <Link href='/'>Conocenos</Link>
        </button>
      </div>
    </main>
  );
}

export default Homes;
