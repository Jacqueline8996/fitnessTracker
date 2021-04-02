//require the old data
var db = require("../models");



module.exports = (app) =>{
  
    // get request for the notes that have been stored
    app.get("/api/workouts", (req, res) => {
      db.Workout.find()
        .then((workouts) => {
          res.json(workouts);
        })
        .catch((err) => {
          console.log("error == ", err);
        });
    });
  
  
    // post notes 
  
    app.post("/api/workouts/", function(req, res) {
      db.Workout.create(req.body)
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
      });
    });

    //uppdate
    app.put("/api/workouts/", function(req, res) {
      db.Workout.create(req.body)
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
      });
    });

    // get request for the notes that have been stored
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find()
        .then((workouts) => {
          res.json(workouts);
        })
        .catch((err) => {
          console.log("error == ", err);
        });
    });

};
  