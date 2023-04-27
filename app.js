require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});
const Student = require('./models/student');

// app.use(express.json());

const port = 3000

app.post("/student", (req, res) => {

  const package = req.body

Student
   .create({ name: package.name, first_name: package.first_name, email: package.email })
   .then((newStudent) => {
     res.send(newStudent);
   })
   .catch(err => res.send(err))
});

app.get("/", (req, res) =>
  Student
   .find({})
   .then((models) => {
    res.send(models);
  })
  .catch((err) => {
    res.send(err);
  })
);

app.put("/", (req, res) =>
 Student
   .updateMany({name: "Bob"}, { $set: { name: "Lazar" } })
   .then(function (newStudent) {
     res.send(newStudent);
     console.log(newStudent);
   })
);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



//mongodb+srv://myAtlasDBUser:nRWK6TIIgSb1IbIj@myatlasclusteredu.pmnt9j1.mongodb.net/test
// {
//     "name": "Svitlana",
//     "first_name": "Svitlana",
//     "email": "Svitlana@Svitlana.com",
// }