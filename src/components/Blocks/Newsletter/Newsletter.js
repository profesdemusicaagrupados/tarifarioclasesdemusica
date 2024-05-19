import styles from "@/components/Blocks/Newsletter/newsletter.module.scss";

export default function Newsletter({ content }) {
  return (
    <div className={styles.newsletterContainer}>
      {content.title && <h2>{content.title}</h2>}
      {content.text && <p>{content.text}</p>}
      {content.cta && (
        <form>
          <input></input>
          <button>{content.cta}</button>
        </form>
      )}
    </div>
  );
}
