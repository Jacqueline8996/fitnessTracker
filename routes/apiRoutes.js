//require the old data
var db = require("../models");



module.exports = function(app) {
  
    // get request for the notes that have been stored
    app.get("/api/workouts", function(req, res) => {
      db.Workout.find()
      .then((workouts)=>{
        res.json(workouts);
      })
      .catch((err) => {
        console.log("error == ", err);
      });

    });
  
  
    // post notes 
  
    app.post("/api/workouts/", function(req, res) {
      db.Workout.crea

      });
      // let pastNote = fs.readFileSync(mynotes)
      parseNote.push(addNotes);
      console.log("my database", parseNote);

      //writes the notes 
      fs.writeFileSync(dataBase, JSON.stringify(parseNote));
      res.json(addNotes);
      
     

    });
  
    //Deletes the notes via there ID
    app.delete("/api/notes/:id", function (req, res) {
      //gets the note id that willl be deleted
      let id = req.params.id;
      //parse the the database so you can use it 
      const notesDel = JSON.parse(fs.readFileSync(dataBase))
      
      //make the new notes array
      const newNoteArr = notesDel.filter((note) => note.id !== id)
      //writes the new database after it has been fileted out
      fs.writeFileSync(dataBase, JSON.stringify(newNoteArr))
      res.json({ ok: true });
  });  

  
};
  