"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Start = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz");
  };

  return (
    <div className={styles.start}>
      <h1>Funnel Finished</h1>
      <button onClick={handleStart}>Restart</button>
    </div>
  );
};

export default Start;
