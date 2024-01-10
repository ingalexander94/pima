import plusIcon from "src/assets/icons/plus-icon.svg";
import styles from "./teamfilter.module.css";

const TeamFilter = () => {
  return (
    <section className={styles.team_filter}>
      <p>Selecciona el equipo</p>
      <ul>
        <li className={styles.active}>Tractocamión</li>
        <li>Trailer</li>
        <li>Equipo 1</li>
        <li>Equipo 2</li>
        <li>Equipo 3</li>
        <li>Equipo 4</li>
        <li>Equipo 5</li>
        <li>Equipo 6</li>
        <li>Equipo 7</li>
        <li>Equipo 8</li>
      </ul>
      <button className="btn_black">
        <img src={plusIcon} alt="Plus icon" />
        Agregar equipo
      </button>
    </section>
  );
};

export default TeamFilter;
