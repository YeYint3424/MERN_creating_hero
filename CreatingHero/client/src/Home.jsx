import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/api/home")
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
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center text-light">
          <h3>You can read the biography books on this website</h3>
        </div>
        <div className="row p-2 h-100 p-2">
          
          {characters.map((character) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2 p-2" key={character._id}>
              <Link  className="text-none" to={`/detail/${character._id}`}>
              <div className="card card-home-bio p-0">
                <div className="card-body card-home-bio-body p-0">
                  <img className="img-all-bio" src={character.photo} alt="character's photo" width="100%" height="100%"/>
                </div>
                <div className="card-footer card-home-bio-footer">
                  <h4>{character.name}</h4>
                </div>
              </div>
              </Link>
            </div>
          ))}
          
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/all-biography" className="see-more mt-1">
            <h4>See More...</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
<></>;
