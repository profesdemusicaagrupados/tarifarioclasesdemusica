import styles from "@/components/Blocks/Hero/hero.module.scss";

export default function Hero({ content }) {
  return (
    <div className={styles.heroContainer}>
      <h1>
        <a href="#tarifario">{content.title}</a>
      </h1>
      <a className={styles.arrowIcon} href="#tarifario">
        <img src="/assets/arrow-down.svg" />
      </a>
    </div>
  );
}
