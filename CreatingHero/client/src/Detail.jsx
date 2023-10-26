import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { _id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/detail/${_id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  return (
    <div className="container-fluid">
      <div className="detail">
        <div className="row">
          <h3 className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">Name : {character.name}</h3>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <img
            src={character.photo}
            alt={character.name + "'s photo"}
            className="detail-img"
          /></div>
        </div>
        <div className="detail-p mt-3">
          <p>{character.bio}</p>
        </div>

        <div className="detail-btn">
          <Link to={`/update/${character._id}`}>
            <button className="btn btn-warning">Edit</button>
          </Link>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
