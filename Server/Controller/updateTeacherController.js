const { ObjectId } = require('mongodb');
const { email } = require("../Model/teacherModel");

const updateTeacher = async (database, req, res) => {
  try {
    const userEmail = req.params.email; // Renamed to userEmail to avoid confusion with const email
    const teachersCollection = database.collection('teachers');
    
    // Check if user exists
    const user = await teachersCollection.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    
    // Construct update document
    const updateDoc = {
      $set: {
        qualification: req.body.qualification,
        experience: req.body.experience,
        salary: req.body.salary,
        contact: req.body.contact,
      },
    };

    // Perform update operation
    const result = await teachersCollection.updateOne({ email: userEmail }, updateDoc);

    // Check result and respond accordingly
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.json(result); // Optionally, return the updated document or a success message
  } catch (error) {
    console.error("Failed to update teacher", error);
    res.status(500).json({ error: "Failed to update teacher" });
  }
};

module.exports = { updateTeacher };




