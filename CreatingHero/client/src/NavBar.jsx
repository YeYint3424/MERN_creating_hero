import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="navLogo">
          <Link to="/">
            <img
              src="/book_logo.png"
              alt="book_logo..."
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div>
          <div className="search-group">
            <input
              type="text"
              placeholder="Search..."
              className="search-input text-light"
            />
            <span>
              <button className="btn-search" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
        </div>
        <div className="navButton">
          <Link to="/create">
            <button className="btn btn-curl btn-secondary">Create</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
