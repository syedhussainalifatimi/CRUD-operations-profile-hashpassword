const { ObjectID } = require("mongodb");

const getTeachersData = async (database, req, res) => {
  try {
    const teachersCollection = database.collection('teachers');
    const result = await teachersCollection.find().toArray();
    res.json(result); // Return the fetched data
  } catch (error) {
    console.error("Failed to fetch teachers data", error);
    res.status(500).send({ error: "Failed to fetch teachers data" });
  }
} 

module.exports = { getTeachersData };