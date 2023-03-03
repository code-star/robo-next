import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

type Control = {
  type: "forward" | "backward";
  label: string;
  onClick: () => void;
};

export default function Home() {
  const controls: Control[] = [
    {
      type: "forward",
      label: "Forward",
      onClick: () => console.log("move forward"),
    },
  ];

  return (
    <main className={styles.main}>
      <h1>RoboNext</h1>
      <div className={styles.description}>
        <p>RoboNext</p>
      </div>
      <div className={styles.grid}>
        {controls.map((control) => (
          <div className={styles.card}>
            <h2 className={inter.className}>{control.label}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
