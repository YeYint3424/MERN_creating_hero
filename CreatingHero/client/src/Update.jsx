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
          <div className="row">
            <h3 className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              Name :{" "}
              <input
                type="text"
                value={character.name}
                className="update-input"
                name="name"
              />
            </h3>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <img
                src={character.photo}
                alt={character.name + "'s photo"}
                className="detail-img"
              />
              
            </div>
            <h5 className="mt-3 photo-input">
                Photo Link :{" "}
                <input
                  type="text"
                  value={character.photo}
                  className="update-input"
                  name="photo"
                />
              </h5>
          </div>
          <div className="detail-p mt-3">
            <textarea className="p-area" name='bio' value={character.bio}></textarea>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
