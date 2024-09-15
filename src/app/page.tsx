import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import Projects from "./Components/Projects";

export default function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.container}>
          <h1>Next js with Docker and Cloud Run</h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>

      </main>
    </div>
  );
}
