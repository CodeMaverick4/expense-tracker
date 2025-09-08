import {Link} from 'react-router-dom';

const Topbar = () => {
  return (
    <nav className="d-flex align-items-center gap-3 text-nowrap p-3 fs-5">
      <h2>My Web Link</h2>
      <div className="topbar-links">
        <Link to={''}>Home</Link>
        <Link to={''}>Products</Link>
        <Link to={''}>About Us</Link>
      </div>
    </nav>
  );
};

export default Topbar;
