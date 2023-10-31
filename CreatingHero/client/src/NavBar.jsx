import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [key, setKey] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const searchName = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/search/${key}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((err) => console.log(err));
  };

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
        <form onSubmit={searchName}>
          <div className="search-group">
            <input
              type="text"
              placeholder="Search..."
              className="search-input text-light"
              name="key"
              onChange={(e) => setKey(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span>
              <button className="btn-search" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
        </form>
        <div className="navButton">
          <Link to="/create">
            <button className="btn btn-curl btn-secondary">Create</button>
          </Link>
        </div>
      </div>
      {!focused ? null : (
        <div className="search-item">
          <div className="search-div">
            {searchResults === null || searchResults.length === 0 ? (
              <ul className="search-ul">
                <li>Not Found...</li>
              </ul>
            ) : (
              <ul className="search-ul">
                {searchResults.map((result) => (
                  <Link
                    to={`/detail/${result._id}`}
                    className="search-li"
                    key={result._id}
                  >
                    <li>{result.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
