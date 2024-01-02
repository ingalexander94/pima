import { useContext, useEffect } from "react";
import { AuthContext } from "src/context/auth";
import { useLocation, useNavigate } from "react-router-dom";
import notificationsActiveIcon from "src/assets/icons/notification-active.svg";
import styles from "./header.module.css";
import { getRouteTitle, publicRoutes } from "src/models";
import { CustomStorage } from "../../../lib/Storage";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { authState, setUserAuth } = authContext;

  const handleLogout = () => {
    CustomStorage.removeToken();
    setUserAuth(null);
    navigate(`/${publicRoutes.LOGIN}`, { replace: true });
  };

  return (
    <nav className={styles.navbar}>
      <h4>{getRouteTitle(location.pathname)}</h4>
      <ul>
        <li>
          <img src={notificationsActiveIcon} alt="Icono de notificaciones" />
        </li>
        <li>
          <input type="checkbox" name="submenu" id={styles.submenu} />
          <label htmlFor={styles.submenu}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%C3%81lvaro_Uribe_%28cropped%29.jpg/220px-%C3%81lvaro_Uribe_%28cropped%29.jpg"
              alt="Avatar"
            />
            {`${authState.user?.names}`}
            <ul>
              <li>Mi cuenta</li>
              <li onClick={handleLogout}>Cerrar sesión</li>
            </ul>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
