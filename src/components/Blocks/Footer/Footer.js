import styles from "@/components/Blocks/Footer/footer.module.scss";
import { Averia_Sans_Libre } from "next/font/google";

const averiaSansLibre = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Footer({ content }) {

  return (
    <div className={`${styles.footerContainer} ${averiaSansLibre.className}`}>
      <h2>TRAMA</h2>
    </div>
  );
}
