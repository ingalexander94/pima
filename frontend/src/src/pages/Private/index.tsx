import { Suspense, lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { privateRoutes } from "src/models";
import RoutesWithNotFound from "src/components/RoutesWithNotFound";
import Sidebar from "src/components/UI/Sidebar";
import Header from "src/components/UI/Header";
import Loading from "src/components/UI/Loading";
const Dashboard = lazy(() => import("src/pages/Private/Dashboard"));
const Temporary = lazy(() => import("src/pages/Private/Temporary"));
const Teams = lazy(() => import("src/pages/Private/Teams"));
const Expenses = lazy(() => import("src/pages/Private/Expenses"));
const Indicators = lazy(() => import("src/pages/Private/Indicators"));
const Company = lazy(() => import("src/pages/Private/Company"));
const Settings = lazy(() => import("src/pages/Private/Settings"));
import styles from "./private.module.css";

const Private = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Sidebar />
        <Header />
        <div className={styles.wrapper__private}>
          <RoutesWithNotFound validateAuth={false}>
            <Route
              path="/"
              element={<Navigate to={privateRoutes.TEMPORARY} />}
            />
            <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route
              path={`${privateRoutes.TEMPORARY}/*`}
              element={<Temporary />}
            />
            <Route path={privateRoutes.TEAMS} element={<Teams />} />
            <Route path={privateRoutes.EXPENSES} element={<Expenses />} />
            <Route path={privateRoutes.INDICATORS} element={<Indicators />} />
            <Route path={privateRoutes.COMPANY} element={<Company />} />
            <Route path={privateRoutes.SETTINGS} element={<Settings />} />
          </RoutesWithNotFound>
        </div>
      </Suspense>
    </>
  );
};

export default Private;
