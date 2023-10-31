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
  }

const update = (req,res) => {
  const id = req.params._id;
  Character.findByIdAndUpdate({_id: id}, {name : req.body.name, photo : req.body.photo, bio : req.body.bio})
  .then((response) => res.json(response))
  .catch(err=>console.log(err))
}

const deleteCharacter = (req,res) => {
  const id = req.params._id;
  Character.findByIdAndDelete({_id : id})
  .then(result=>console.log(result))
  .catch(err=>console.log(err))
}

const bioHome = async (req, res) => {
  try {
    const characters = await Character.find({});
    const characterFour = characters.slice(0,4); 

    if (characterFour.length > 0) {
      res.json(characterFour);
    } else {
      res.status(404).json({ message: 'No characters found or not enough characters.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const searchWithName = async (req,res) => {
  let data = await Character.find({
    "$or":[
      { name: { $regex: new RegExp(req.params.key, "i") } }
    ]
  })
  res.json(data)
}


module.exports = {
  createBio,
  allBio,
  bioById,
  update,
  deleteCharacter,
  bioHome,
  searchWithName
};
