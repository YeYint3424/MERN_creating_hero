import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Update = () => {
  const { _id } = useParams();
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const [bio, setBio] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/detail/${_id}`)
      .then((response) => {
        setName(response.data.name)
        setPhoto(response.data.photo)
        setBio(response.data.bio)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  const Update  = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/update/"+_id, { name, photo, bio })
      .then((result) => {
        console.log(result)
        navigate(`/detail/${_id}`)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid">
      <div className="detail">
        <form onSubmit={Update}>
          <div className="row">
            <h3 className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              Name :{" "}
              <input
                type="text"
                value={name}
                className="update-input"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </h3>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <img
                src={photo}
                alt={name + "'s photo"}
                className="detail-img"
              />
              
            </div>
            <h5 className="mt-3 photo-input">
                Photo Link :{" "}
                <input
                  type="text"
                  value={photo}
                  className="update-input"
                  name="photo"
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </h5>
          </div>
          <div className="detail-p mt-3">
            <textarea className="p-area" name='bio' value={bio}
            onChange={(e) => setBio(e.target.value)}></textarea>
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
