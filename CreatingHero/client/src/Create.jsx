import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const [bio, setBio] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/create", { name, photo, bio })
      .then((result) => {
        console.log(result)
        navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-center p-5">
        <form onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              className="form-control"
              id="photo"
              name="photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              className="form-control"
              id="bio"
              name="bio"
              rows="6"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-add col-12">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
<></>;
