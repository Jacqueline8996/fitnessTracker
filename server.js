const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

//establishes the mongoose connection and to work outs and to the server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", 
{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false});



// routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//start the app
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
