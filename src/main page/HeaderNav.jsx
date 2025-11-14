import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <h3 className="nav-title">Real world blog</h3>
      <nav>
        <NavLink to="/" className="nav-tag"> Home </NavLink>
        <NavLink to="/new-post" className="nav-tag">New post</NavLink>
        <NavLink to="/settings" className="nav-tag">Setings</NavLink>
        <NavLink to="/login" className="nav-tag">Log In</NavLink>
      </nav>
    </div>
  );
};

export default HeaderNav;
