import styles from "@/components/Blocks/Text/text.module.scss";

export default function Text({ content }) {
  return (
    <div className={styles.textContainer}>
      {content.title && <h2>{content.title}</h2>}
      {content.text && (
        <div
          className={styles.htmlContainer}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
    </div>
  );
}
