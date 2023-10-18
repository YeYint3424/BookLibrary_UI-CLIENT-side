import { Link } from "react-router-dom/cjs/react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <ul className="mt-5">
        <Link to="/">
          <li>
            <i className="fa-solid fa-house"></i>
            <span className="mx-4">Home</span>
          </li>
        </Link>
        <Link to="/all-books">
          <li>
            <i className="fa-solid fa-book-open"></i>
            <span className="mx-4">All Book</span>
          </li>
        </Link>

        <div>
          <li>
            <i className="fa-solid fa-book-bookmark"></i>
            <span className="mx-4">Bookmarks</span>
          </li>
        </div>

        <div>
          <li className="nav-li">
            <i className="fa-solid fa-heart"></i>
            <span className="mx-4">Wish List</span>
          </li>
        </div>
      </ul>
    </>
  );
};

export default LeftSideBar;
