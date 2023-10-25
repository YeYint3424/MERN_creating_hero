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
        <div className="detail-head">
          <h3>Name : {character.name}</h3>
          <img src={character.photo} alt={character.name + "'s photo"} className="detail-img" />
        </div>
        <div className="detail-p mt-3">
            <p>{character.bio}</p>
        </div>

        <div className="detail-head">
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
