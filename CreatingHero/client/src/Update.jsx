import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
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
        <form action="">
          <div className="detail-head">
            <h3>
              Name :{" "}
              <input
                type="text"
                value={character.name}
                className="update-input"
              />
            </h3>
            <div>
              <img
                src={character.photo}
                alt={character.name + "'s photo"}
                className="detail-img"
              />
              <h5 className="mt-3">
                Photo Link :{" "}
                <input
                  type="text"
                  value={character.photo}
                  className="update-input"
                />
              </h5>
            </div>
          </div>
          <div className="detail-p mt-3">
            <textarea className="p-area" value={character.bio}></textarea>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
