import book_icon from "/library-icon.png";
const NavBar = () => {
  return (
    <>
      <nav className="navBar mb-2 p-3">
        <div className="nav-item">
          <img src={book_icon} alt="Logo" width={40} height={40} />
        </div>
        <div className="nav-item search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn bg-light text-dark" type="button" id="SearchBar">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="nav-item">
          <h4 className="text-light">Book Library</h4>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
