import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import Spinner from '../Spinner/Spinner';

export function ProtectedRoute({ children }) {

  const { user, load } = useAuth();

  if (load) return <Spinner/>

  if (!user) return <Navigate to="/login"/>;
  

  return <>{children}</>
}