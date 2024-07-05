const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://syedhussainalifatimi:syedhussainalifatimi@cluster0.yjgyj2i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "School";
let database;

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(CONNECTION_STRING);
    database = client.db(DATABASE_NAME);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Failed to connect", error);
    process.exit(1);
  }
};

app.listen(5038, async () => {
  await connectToDatabase();
  console.log("Server is connected on port 5038 and database");
});

// post teachers data on mongodb

const addNewTeacher = require('./Controller/addNewTeacherController');

app.post('/api/addnewteacher', (req, res) => {
  addNewTeacher.addNewTeacher(database, req, res);
});

// get teachers data from mongodb
const getTeachersData = require('./Controller/getTeachersController')

app.get('/api/getteachersdata', (req, res) => {
  getTeachersData.getTeachersData(database, req, res);
});

// delete teacher's data from mongodb
const deleteTeacher = require('./Controller/deleteTeacherController')

app.delete('/api/deleteteacher/:id', (req, res) =>{
  deleteTeacher.deleteTeacher(database, req, res);
})

// update teacher's data from mongodb
const updateTeacher = require('./Controller/updateTeacherController')

app.put('/api/updateteacher/:email', (req, res) =>{
  updateTeacher.updateTeacher(database, req, res);
})

//get admin data from mongodb
const adminData = require('./Controller/adminDataController')

app.get('/api/admindata', (req, res) => {
  adminData.adminData(database, req, res)
})

