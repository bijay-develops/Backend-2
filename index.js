const express = require ('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
}) 

// app.get("/profile/:username", function(req, res){
//     res.send("Hello " + req.params.username);
// }) 

// app.get("/profile/:username/:age", function(req, res){         //For printing the date in json format
//     res.send(req.params);
// }) 

app.get("/profile/:username/:age", function(req, res){
    res.send(`Welcome! ${req.params.username} . <br/> So You are of age ${req.params.age}`);
}) 

app.listen(3000, function(){
    console.log("Its Running");
})