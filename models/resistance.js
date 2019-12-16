const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    name: String,
    sets: Number,
    reps: Number,
    duration: Number,
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;