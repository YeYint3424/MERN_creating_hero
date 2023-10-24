const Create = () => {
  return (
    <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center p-5">
            <form action="">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name"/>
                </div>
                <div className="form-group">
                    <label for="photo">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo"/>
                </div>
                <div className="form-group">
                    <label for="bio">Bio</label>
                    <textarea className="form-control" id="bio" name="bio" rows="6"></textarea>
                </div>
                <button type="submit" className="btn btn-add col-12">Add</button>
            </form>
        </div>
    </div>
  );
};

export default Create;
<></>;
