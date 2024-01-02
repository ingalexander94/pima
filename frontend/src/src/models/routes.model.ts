import { RouteUI } from "src/interfaces";
import dashboardIcon from "src/assets/icons/dashboard.svg";
import chartIcon from "src/assets/icons/chart.svg";
import temparioIcon from "src/assets/icons/tempario.svg";

export const publicRoutes = {
  LOGIN: "iniciar-sesion",
  RECOVERY: "recuperar-clave",
  FORGOT: "cambiar-clave",
};

export const privateRoutes = {
  PRIVATE: "administrador",
  DASHBOARD: "dashboard",
  TEMPORARY: "tempario-general",
  TEAMS: "equipos",
  EXPENSES: "gastos-operativos",
  INDICATORS: "indicadores-de-mtto",
  COMPANY: "empresa",
  SETTINGS: "ajustes",
};

export const temporaryRoutes = {
  OPERATIONS: "operaciones",
  CODING: "codificacion-del-sistema",
  CLASSIFICATIONS: "clasificacion-de-tecnicos",
  CONVERSION: "tempario-de-conversion",
};

export const moduleTemporaryRoutes: RouteUI[] = [
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEMPORARY}/${temporaryRoutes.OPERATIONS}`,
    icon: "",
    title: "Operaciones",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEMPORARY}/${temporaryRoutes.CODING}`,
    icon: "",
    title: "Codificación del sistema",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEMPORARY}/${temporaryRoutes.CLASSIFICATIONS}`,
    icon: "",
    title: "Clasificación de técnicos",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEMPORARY}/${temporaryRoutes.CONVERSION}`,
    icon: "",
    title: "Tempario de Conversión",
  },
];

export const modulesGlobalRoutes: RouteUI[] = [
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.DASHBOARD}`,
    icon: dashboardIcon,
    title: "Dashboard",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEMPORARY}`,
    icon: temparioIcon,
    title: "Tempario general",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.TEAMS}`,
    icon: chartIcon,
    title: "Equipos",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.EXPENSES}`,
    icon: chartIcon,
    title: "Gastos operativos",
  },
  {
    path: `/${privateRoutes.PRIVATE}/${privateRoutes.INDICATORS}`,
    icon: chartIcon,
    title: "Indicadores de MTTO.",
  },
];

export const getRouteTitle = (search: string): string => {
  if (search === "/administrador/ajustes") return "Ajustes";
  const route =
    modulesGlobalRoutes.find(({ path }) => search.includes(path))?.title ??
    "Mapi";
  return route;
};
