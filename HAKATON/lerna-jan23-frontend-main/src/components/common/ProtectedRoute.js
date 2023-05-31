import { Navigate } from "react-router";
import AuthService from "../../data/services/AuthService";

function ProtectedRoute({ roles, children }) {
  const currentUser = AuthService.getCurrentUser();
  const rolesArray = roles ? roles.split(",") : [];

  if (currentUser && (roles.length === 0 || rolesArray.includes(currentUser.Role))) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
export default ProtectedRoute;
