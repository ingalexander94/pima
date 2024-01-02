import { NavLink } from "react-router-dom";
import logo from "src/assets/logo.svg";
import styles from "./sidebar.module.css";
import chartIcon from "src/assets/icons/chart.svg";
import settingsIcon from "src/assets/icons/settings.svg";
import { modulesGlobalRoutes, privateRoutes } from "src/models";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={logo} alt="logo" />
      <nav className={styles.sidebar__modules}>
        <div>
          <span>Menú</span>
          <ul>
            {modulesGlobalRoutes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  <img src={route.icon} alt={`Icono de ${route.title}`} />
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>Gestión de empresas</span>
          <ul>
            <li>
              <NavLink
                to={`/${privateRoutes.PRIVATE}/${privateRoutes.COMPANY}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img src={chartIcon} alt="dashboard icon" />
                Empresa 1
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink
              to={`/${privateRoutes.PRIVATE}/${privateRoutes.SETTINGS}`}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <img src={settingsIcon} alt="dashboard icon" />
              Ajustes
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
