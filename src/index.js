require("dotenv").config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const connectDB = require('../db/conn');
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

console.log('Static Path:', static_path);

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

 app.get('/index', (req, res) => {
   res.render('index');
 });

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/blogs', (req, res) => {
  res.render('blogs');
});

app.get('/careers', (req, res) => {
  res.render('careers');
});
const start = async () => {
  try {
    console.log('Connecting to database...');
    await connectDB(process.env.MONGODB_URL);
   
  } catch (error) {
    console.log('Error starting server:', error);
  }
};
app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});

start();
