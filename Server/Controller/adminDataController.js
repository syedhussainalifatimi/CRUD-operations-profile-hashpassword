const { ObjectID } = require("mongodb");

const adminData = async (database, req, res) => {
  try {
    const adminCollection = database.collection('admin');
    const result = await adminCollection.find().toArray();
    res.json(result); // Return the fetched data
  } catch (error) {
    console.error("Failed to fetch teachers data", error);
    res.status(500).send({ error: "Failed to fetch teachers data" });
  }
} 

module.exports = { adminData };