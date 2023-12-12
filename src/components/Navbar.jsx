import Logo from "../assets/svg/logo.svg";

function Navbar() {
  return (
    <nav className="navbar box" role="navigation" aria-label="main navigation">
      <div className="navbar-brand  container">
        <a className="navbar-item" href="/">
          <img src={Logo} width="56" height="56" alt="app logo" />
          <span className="title is-4">Reaksi Ayam</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
