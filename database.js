const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Mehardeep7:mehardeep@cluster0.uexjhtr.mongodb.net/");

var schema = mongoose.Schema({
    name_db: String,
});

module.exports = mongoose.model("cluster0",schema);

// npm : node package manager