import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "src/context/auth";
import { privateRoutes, publicRoutes } from "src/models";

interface Props {
  privateValidation: boolean;
}

const privateValidationFragment = <Outlet />;
const publicValidationFragment = (
  <Navigate replace to={privateRoutes.PRIVATE} />
);

const AuthGuard = ({ privateValidation }: Props) => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  return user ? (
    privateValidation ? (
      privateValidationFragment
    ) : (
      publicValidationFragment
    )
  ) : (
    <Navigate replace to={publicRoutes.LOGIN} />
  );
};

export default AuthGuard;
