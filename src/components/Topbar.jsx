import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/authContext';

const Topbar = () => {
  const { userData,handleLogout } = useContext(authContext);

  return (
    <nav className="d-flex align-items-center gap-3  py-3 px-4 fs-5 justify-content-between">
      <div className='d-flex align-items-center gap-3 text-nowrap'>
        <h2 className='fw-bold'>MyWeb Link</h2>
        <div className="topbar-links">
          <Link to={''}>Home</Link>
          <Link to={''}>Products</Link>
          <Link to={''}>About Us</Link>
        </div>
      </div>

     {userData && <button className='btn btn-danger' onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Topbar;
