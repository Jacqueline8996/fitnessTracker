const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static('files'))
app.use('/css',express.static( 'public/css'));
app.use('/js',express.static( 'public/js'));


// morgan is a middleware log that logs details about requests/responses
app.use(logger("dev"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// routes
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});