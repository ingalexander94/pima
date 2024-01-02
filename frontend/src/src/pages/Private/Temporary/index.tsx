import { lazy } from "react";
import { NavLink, Navigate, Route } from "react-router-dom";
import { moduleTemporaryRoutes, temporaryRoutes } from "src/models";
import RoutesWithNotFound from "src/components/RoutesWithNotFound";
const Operations = lazy(() => import("src/pages/Private/Temporary/Operations"));
const Coding = lazy(() => import("src/pages/Private/Temporary/Coding"));
const Classifications = lazy(
  () => import("src/pages/Private/Temporary/Classifications")
);
const Conversion = lazy(() => import("src/pages/Private/Temporary/Conversion"));
import styles from "./temporary.module.css";

const Temporary = () => {
  return (
    <article className={styles.temporary}>
      <nav className={styles.nav_temporary}>
        <ul>
          {moduleTemporaryRoutes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <RoutesWithNotFound validateAuth={false}>
        <Route
          path="/"
          element={<Navigate to={temporaryRoutes.OPERATIONS} />}
        />
        <Route path={temporaryRoutes.OPERATIONS} element={<Operations />} />
        <Route path={temporaryRoutes.CODING} element={<Coding />} />
        <Route
          path={temporaryRoutes.CLASSIFICATIONS}
          element={<Classifications />}
        />
        <Route path={temporaryRoutes.CONVERSION} element={<Conversion />} />
      </RoutesWithNotFound>
    </article>
  );
};

export default Temporary;
