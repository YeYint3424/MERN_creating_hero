import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBio = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/api/all-bio")
          .then((response) => {
            console.log(response.data)
              setCharacters(response.data);
          })
          .catch((error) => {
              console.error(error);
              setCharacters([]);
          });
  }, []);

  return (
    <>
      <div className="all-bio">
        <div className="row p-5">
          {characters.map((character) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2" key={character._id}>
              <Link  className="text-none" to={`/detail/${character._id}`}>
              <div className="card card-all-bio p-0">
                <div className="card-body card-all-bio-body p-0">
                  <img className="img-all-bio" src={character.photo} alt="character's photo" width="100%" height="100%"/>
                </div>
                <div className="card-footer card-all-bio-footer">
                  <h4>{character.name}</h4>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBio;
