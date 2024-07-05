const { ObjectID } = require("mongodb");

const TeacherModel = {
  name: String,
  qualification: String,
  email: String,
  experience: String,
  salary: Number,
  contact: Number,
  age: Number,
};

module.exports = TeacherModel;