import plusIcon from "src/assets/icons/plus-icon.svg";
import folderIcon from "src/assets/icons/folder.svg";
import editIcon from "src/assets/icons/edit.svg";
import deleteIcon from "src/assets/icons/delete.svg";
import styles from "./listcomponents.module.css";

const ListComponents = () => {
  return (
    <section className={styles.list_components}>
      <div className={styles.actions}>
        <p>Listado de Componentes</p>
        <button className="btn_black">
          <img src={plusIcon} alt="Plus icon" />
          Agregar componente
        </button>
      </div>
      <ul className={styles.components}>
        <div>
          <input type="checkbox" name="component" id={styles.component} />
          <label htmlFor={styles.component}>
            MA. Motor
            <div className={styles.buttons}>
              <button>
                <img src={editIcon} alt="edit icon" />
              </button>
              <button>
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </label>
          <ul>
            <li>
              <span>63</span>
              <img src={folderIcon} alt="folder icon" />
              1MA. Sistema de sobrealimentación y escape.
            </li>
            <li>
              <span>968</span>
              <img src={folderIcon} alt="folder icon" />
              1MC. Sistema de combustible.
            </li>
            <li>
              <span>76</span>
              <img src={folderIcon} alt="folder icon" />
              1ML. Sistema de lubricación.
            </li>
            <li>
              <span>113</span>
              <img src={folderIcon} alt="folder icon" />
              1MR. Sistema de refrigerante.
            </li>
            <li>
              <span>178</span>
              <img src={folderIcon} alt="folder icon" />
              1ME. Sistema electrónico y eléctrico.
            </li>
            <li>
              <span>30</span>
              <img src={folderIcon} alt="folder icon" />
              1MP. Sistema de postratamiento SCR.
            </li>
            <li>
              <span>267</span>
              <img src={folderIcon} alt="folder icon" />
              1MO. Operaciones especiales del motor.
            </li>
          </ul>
        </div>
        <li>
          <span>52</span>
          <img src={folderIcon} alt="folder icon" />
          2EO. Electricidad OEM.
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>88</span>
          <img src={folderIcon} alt="folder icon" />
          3CA. Cabina.
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>76</span>
          <img src={folderIcon} alt="folder icon" />
          4ET. Transmisión y embrague.
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>16</span>
          <img src={folderIcon} alt="folder icon" />
          5PD. Puente delantero.
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>84</span>
          <img src={folderIcon} alt="folder icon" />
          6PT. Puente trasero.
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>128</span>
          <img src={folderIcon} alt="folder icon" />
          7FR. Frenos
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>60</span>
          <img src={folderIcon} alt="folder icon" />
          8SU. Suspensión
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>38</span>
          <img src={folderIcon} alt="folder icon" />
          9BA. Bastidor
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>20</span>
          <img src={folderIcon} alt="folder icon" />
          10DI. Dirección
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
        <li>
          <span>132</span>
          <img src={folderIcon} alt="folder icon" />
          11LL. Llantas
          <div className={styles.buttons}>
            <button>
              <img src={editIcon} alt="edit icon" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ListComponents;
