import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import Spinner from '../Spinner/Spinner';

//If the user is not logged in, it redirects to the login page. Otherwise, render the protected path component.
export function ProtectedRoute({ children }) {

  const { user, load } = useAuth();

  if (load) return <Spinner/>

  if (!user) return <Navigate to="/login"/>;
  

  return <>{children}</>
}