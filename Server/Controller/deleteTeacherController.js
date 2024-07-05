const { ObjectID } = require("mongodb");
const { email } = require("../Model/teacherModel");

const deleteTeacher = async (database, req, res) => {
  try {
    const id = req.params._id;
    const teachersCollection = database.collection('teachers');
    const result = await teachersCollection.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.json("Teacher deleted successfully");
  } catch (error) {
    console.error("Failed to delete teacher", error);
    res.status(500).send({ error: "Failed to delete teacher" });
  }
};

module.exports = { deleteTeacher };

