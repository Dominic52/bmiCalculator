const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    
    let weight = Number(req.body.weight);
    let height = Number(req.body.height)/100;
    
    let result = weight / (height * height);

    res.send("Your BMI is " + result.toFixed(2));
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});