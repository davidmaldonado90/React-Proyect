import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to='/'>
              <img className='logo' src="images/logo.png" alt='logo'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Link to='/'>
                <li className="nav-item nav-link ">Home</li>
              </Link>
              <Link to='/categoria/Fresco'>
                <li className="nav-item nav-link ">Fresco</li>
              </Link>
              <Link to='/categoria/Congelado'>
                <li className="nav-item nav-link ">Congelado</li>
              </Link>
              <Link to='/categoria/Rebozado'>
                <li className="nav-item nav-link ">Rebozados</li>
              </Link>
            </ul>
            <CartWidget/>
        </div>
      </div>
    </nav>
  </>
  );
}

export default NavBar;

