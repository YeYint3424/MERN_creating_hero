const Character = require("../models/Character");

const createBio = (req, res) => {
  const character = new Character(req.body);

  character
    .save(character)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const allBio = (req, res) => {
    Character.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
    });
};
const bioById = async (req, res) => {
    const id = req.params._id;
  
    try {
      const character = await Character.findById(id).exec();
  
      if (character) {
        res.json(character);
      } else {
        console.log('Character not found');
        res.status(404).json({ error: 'Character not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
module.exports = {
  createBio,
  allBio,
  bioById
};
