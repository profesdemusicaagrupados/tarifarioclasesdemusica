import styles from "@/components/Blocks/ThreeColumnsTable/threecolumnstable.module.scss";

export default function ThreeColumnsTable({ content }) {
  return (
    <div className={styles.threeColumnsTableContainer}>
      {content.title && <h2>{content.title}</h2>}
      {content.text && (
        <div
          className={styles.htmlContainer}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
      {content.table && (
        <div className={styles.tableContainer}>
          <div className={styles.columnTitlesContainer}>
            {content.table.columns.map((cell, index) => {
              return (
                <div
                  className={`${styles.columnTitleCell} ${styles[`row${index}`]}`}
                  key={index}
                >
                  <p className={styles.columnTitleValue}>{cell}</p>
                </div>
              );
            })}
          </div>
          {content.table.rows.map((row, index) => {
            return (
              <div className={styles.columnRowsContainer} key={index}>
                {row.map((cell, index) => {
                  return (
                    <div
                      className={`${styles.columnRowCell} ${
                        styles[`row${index}`]
                      }`}
                      key={index}
                    >
                      <p className={styles.columnRowTitle}>
                        {content.table.columns[index]}
                      </p>
                      <p className={styles.columnRowValue}>{cell}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
