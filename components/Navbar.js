import React from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.nav}v>
      <div className={styles.topnav}>
        <div className="active" onClick={() => router.push("/")}>
          Home
        </div>
        <div onClick={() => router.push("/dogs")}>Dogs</div>
      </div>
    </div>
  );
}
