import { Inter } from "@next/font/google";
import styles from "../../app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

type Control = {
  type: "forward" | "backward";
  label: string;
  onClick: () => void;
};

export default function HomePage() {
  const controls: Control[] = [
    {
      type: "forward",
      label: "Forward",
      onClick: () => console.log("move forward"),
    },
  ];

  const SRC = "http://10.10.10.1:8011";

  return (
    <main className={styles.main}>
      <video width="100%" height="100%" controls>
        <source src={SRC}></source>
      </video>
    </main>
  );
}
