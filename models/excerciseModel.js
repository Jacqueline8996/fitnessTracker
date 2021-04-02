const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcersiseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
    workType: {
      type: String,
      trim: true,
      require:true
    },
    name:{
      type: String,
      trim: true,
      required: true,
    },
    distance: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0
    },
    weight: {
      type: Number,
      default: 0
    },
    sets: {
      type: Number,
      default: 0
    },
    reps: {
      type: Number,
      default: 0
    },
    duration: {
    type: Number,
    default: 0,
    } ,
  },
  ],

}); 


const Excercise = mongoose.model("excercise", ExcersiseSchema);

module.exports = Excercise;
