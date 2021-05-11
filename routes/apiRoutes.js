//require the old data
var db = require("../models");



module.exports = (app) =>{
  
    // get request for the notes that have been stored
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(databaseWorkout => {
      
          databaseWorkout.forEach(workout => {
              var total = 0;
              workout.exercises.forEach(e => {
                  total += e.duration;
              });
              workout.totalDuration = total;

          });

          res.json(databaseWorkout);
      }).catch(err => {
          res.json(err);
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
    app.put("/api/workouts/:id", function(req, res) {

      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { exercises: req.body }
        },
        { new: true }).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    // get request for the notes that have been stored
    app.get("/api/workouts/range", (req, res) => {
      
      db.Workout.find({}).then(workout => {
        console.log("ALL WORKOUTS");
        console.log(workout);

        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
    });

};
  