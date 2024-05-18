import styles from "@/components/Blocks/Table/table.module.scss";

export default function Table({ content }) {
  return (
    <div className={styles.tableContainer}>
      {content.title && <h2>{content.title}</h2>}
      {content.table && <></>}
      {content.text && (
        <div
          className={styles.htmlContainer}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
    </div>
  );
}
