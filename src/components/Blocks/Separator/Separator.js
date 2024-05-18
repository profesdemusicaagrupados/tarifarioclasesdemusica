import styles from "@/components/Blocks/Separator/separator.module.scss";

export default function Separator({ content }) {
  return (
    <div className={styles.separatorContainer}>
      <hr />
    </div>
  );
}
