//CSS
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">Logo</div>

        {/* Right Section */}
        <div className="navbar-right-section">
          <div className="navbar-time">{new Date().toLocaleTimeString()}</div>

          <div className="navbar-notification">
            <span role="img" aria-label="notification">
              🔔
            </span>
            <span className="navbar-unread-indicator"></span>
          </div>

          <div className="navbar-avatar"></div>
        </div>
      </nav>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-left"><span className="breadcrumb-link">/ Beranda </span>/ SSM QC</div>
        <div className="breadcrumb-right">
          <span className="breadcrumb-link">&lt; Beranda Permohonan</span>
          <span className="breadcrumb-home">
            <span role="img" aria-label="home">
              🏠
            </span>
          </span>
          <span className="breadcrumb-link">Beranda Menu</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
