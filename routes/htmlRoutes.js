
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");




module.exports = function(app) {

    //gets the html Pages

    app.get("/", (req, res) => {

        return res.sendFile(path.join(__dirname,"../public/index.html"));

    });
    //gets the excercise page
    app.get("/exercise", (req, res) => {

        return res.sendFile(path.join(__dirname,"../public/exercise.html"));
      
    });
    //gets the stats 
    app.get("/stats", (req, res) => {

        return res.sendFile(path.join(__dirname,"../public/stats.html"));

    });
    
};