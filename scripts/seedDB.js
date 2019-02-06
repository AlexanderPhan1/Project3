const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kawasaki"
);

const chefSeed = [
    {
    chefName: "Alexander",
    email: 'alexphan123@gmail.com',
    password: "Moments",
    city: "Houston",
    bio: "Houstonian Citizen",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:"",
    cuisines: ""
  },

];

db.Chef
  .remove({})
  .then(() => db.Chef.collection.insertMany(chefSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
