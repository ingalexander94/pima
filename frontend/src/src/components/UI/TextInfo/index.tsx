import styles from "./textinfo.module.css";

type Props = {
  loading: boolean;
  error: string;
};

const TextInfo = ({ loading, error }: Props) => {
  return (
    <span className={styles.text_info}>
      {loading ? (
        <span>
          <i className="fas fa-spinner fa-pulse"></i> Cargando
        </span>
      ) : (
        <>
          {error ? <i className="fas fa-times"></i> : ""}
          {error}
        </>
      )}
    </span>
  );
};

export default TextInfo;
