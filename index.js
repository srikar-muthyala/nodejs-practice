const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/multcalc", function(req, res){
  res.sendFile(__dirname + "/MultCalc.html");
});

app.post("/multcalc", function(req, res){
  var result = Number(req.body.num1) * Number(req.body.num2);
  res.send("calculation is "+result);
});

app.post("/bmicalculator", function(req, res){
  // w/h2
  var result = Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height));
  res.send("Your BMI is "+result);
});

app.post("/", function(req,res){
  var result = Number(req.body.num1) + Number(req.body.num2);
  console.log(result);
  res.send("result is "+result);
})

app.listen(3000, function() {
  console.log("server started on port 3000");
});
