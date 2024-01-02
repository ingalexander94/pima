import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./models";
import { AuthProvider } from "./context/auth";
import { UIProvider } from "./context/ui";
import { SettingsProvider } from "./context/settings/settings.provider";
import ScreenLoader from "./components/ScreenLoader";
import Loading from "./components/UI/Loading";
import RoutesWithNotFound from "./components/RoutesWithNotFound";
import AuthGuard from "./components/guards/AuthGuard";
const Login = lazy(() => import("./pages/Auth/Login"));
const Recovery = lazy(() => import("./pages/Auth/Recovery"));
const Private = lazy(() => import("./pages/Private"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <UIProvider>
          <SettingsProvider>
            <AuthProvider>
              <BrowserRouter>
                <ScreenLoader>
                  <RoutesWithNotFound validateAuth={true}>
                    <Route
                      path="/"
                      element={<Navigate to={privateRoutes.PRIVATE} />}
                    />
                    <Route path={publicRoutes.LOGIN} element={<Login />} />
                    <Route
                      path={publicRoutes.RECOVERY}
                      element={<Recovery />}
                    />
                    <Route element={<AuthGuard privateValidation={true} />}>
                      <Route
                        path={`${privateRoutes.PRIVATE}/*`}
                        element={<Private />}
                      />
                    </Route>
                  </RoutesWithNotFound>
                </ScreenLoader>
              </BrowserRouter>
            </AuthProvider>
          </SettingsProvider>
        </UIProvider>
      </Suspense>
    </div>
  );
}

export default App;
