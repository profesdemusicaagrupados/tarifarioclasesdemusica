import styles from "@/components/Blocks/Hero/hero.module.scss";

export default function Hero({ content }) {

  return (
    <div className={styles.heroContainer}>
      <h1>
        {content.title.map((line, key) => (
          <a href="#tarifario" key={key}>
            {line}
          </a>
        ))}
      </h1>
      <a className={styles.arrowIcon} href="#tarifario">
        <img src="/assets/arrow-down.svg" />
      </a>
    </div>
  );
}
