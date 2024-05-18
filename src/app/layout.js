import "@/styles/globals.scss";
import { Nanum_Gothic } from "next/font/google";

export const metadata = {
  title: "Tarifario clases de música 2024 - TRAMA",
  description:
    "Esta herramienta es una orientación para saber cuánto cobrar por las clases particulares de música. Las tarifas del cuadro son referencias de lo que consideramos como valores mínimos por nuestro trabajo. ",
};

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}
