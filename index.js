var express = require('express');
var router = express.Router();
var database = require("./database");
/* GET home page. */

router.get('/', function (req, res, next) {

  res.render('index', { a: data });

});

router.get("/task", function (req, res) {
  database.find({}, function (err, data) {
    res.render('form', { data: data });
  });
});

router.post("/send", function (req, res) {
  var a = req.body.Reminder;

  database.create({
    name_db: a,
  })

  res.redirect("/task");

})

router.get("/delete/:id", function(req,res){
  var task_id = req.params.id;

  database.findByIdAndDelete(task_id, function(err){
    res.redirect("/task");
  });
});

router.get("/update/:id",function(req,res){
  var actual_id = req.params.id;

  database.find({},function(err,data){
    res.render("form2",{ad:actual_id,d:data})
  })
})

router.post("/update/:id",function(req,res){
  var actual_id = req.params.id;

  database.findByIdAndUpdate(actual_id,{
    name_db: req.body.Reminder,
  }, function(err){

    if(err){
      console.log(err);
    }
    res.redirect("/task");
  });
});

module.exports = router;


