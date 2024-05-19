import styles from "@/components/Blocks/Table/table.module.scss";

export default function Table({ content }) {
  return (
    <div className={styles.tableContainer} id="tarifario">
      {content.title && <h2>{content.title}</h2>}
      {content.table && (
        <div className={styles.table}>
          {content.table.map((row, index) => {
            return (
              <div className={styles.tableRow} key={index}>
                <div className={styles.seniorityColumn}>
                  <p className={styles.columnTitle}>Antigüedad</p>
                  <p className={styles.columnFigure}>{row.seniority}</p>
                </div>
                <div className={styles.rateColumn}>
                  <p className={styles.columnTitle}>Tarifa mínima</p>
                  <p className={styles.columnFigure}>{row.rate}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {content.text && (
        <div
          className={styles.htmlContainer}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
    </div>
  );
}
