import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="navLogo">
          <a href="/"><img src="/book_logo.png" alt="book_logo..." width={50} height={50} /></a>
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
          <a href="/create"><button className="btn btn-curl btn-secondary">Create</button></a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
