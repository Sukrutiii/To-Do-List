//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   
    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US" , options );
    res.render("list", {listTitle: day, newListItems: items });
});

app.post("/" , function(req , res){
    
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");


});

app.get("/about", function(req, res){
    res.render('about');
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});