const { ObjectID } = require("mongodb");
const { email } = require("../Model/teacherModel");

const addNewTeacher = async (database, req, res) => {
  try {
    const newTeacher = req.body;
    
    const teachersCollection = database.collection('teachers');
    
    const existingTeacher = await teachersCollection.findOne({ email: newTeacher.email });
    
    if (existingTeacher) {
      return res.status(400).json({ error: "Teacher with this email already exists" });
    }

    const result = await teachersCollection.insertOne({
      name: req.body.name,
      qualification: req.body.qualification,
      email: req.body.email,
      experience: req.body.experience,
      salary: req.body.salary,
      contact: req.body.contact,
      age: req.body.age
    });
    res.json("----New teacher added-----");
  } catch (error) {
    console.error("Failed to add new teacher", error);
    res.status(500).send({ error: "Failed to add new teacher" });
  }
};

module.exports = { addNewTeacher };

