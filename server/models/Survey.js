var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Survey");

var SurveySchema = new mongoose.Schema({
    name: {type: String, unique: [true,"This name is already being used, please pick a unique name!"] , required: [true, "name is required!"], minlength: [3, "name must be a minimum of 3 characters!"]},
    type: {type: String, required: [true, "type is required!"], minlength: [3, "type must be a minimum of 3 characters!"]},
    description: {type: String, required: [true, "description is required!"], minlength: [3, "description must be a minimum of 3 characters!"]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number}
}, {timestamps: true});

mongoose.model("Survey", SurveySchema);
;