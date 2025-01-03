import "./navbar.modules.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="brand-container">
        <img className=" logo" src="./logo.png" alt="mcq-pratice-logo" />
        <span className="brand-name">MCQHub</span>
      </div>
      <div>
        <span className="login-btn">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
