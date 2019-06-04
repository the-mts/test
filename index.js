const express = require('express');
const bodyparser = require('body-parser')
const app = express();

app.use(express.static("static"));

app.use(bodyparser.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.get("/", function(req, res, next) {
    res.send("Hi, This is my first node server");
});

app.get("/first", function(req, res, next) {
    if(req.query.greeting == "1")
        res.send("Hi, This is second route");
    else
        res.send("Bye, from the second route");
    // res.send("Hi, This is my first node server, first page");
});

app.get("/second", function(req, res, next) {
    res.send("Hi, This is my first node server, second page");
});

app.post("/query", function(req, res, next) {
    // res.send(Math.random() + " " + JSON.stringify(req.body));
    if(! req.body.username) {
        res.send("Username field is empty");
        return;
    }
    if(! req.body.password) {
        res.send("Password field is empty");
        return;
    }

    res.send("Your username is "+req.body.username+" and password is "+req.body.password);
});

app.get("/random", function(req, res, next) {
    res.send(""+Math.floor(Math.random()*100000));
});

app.get("/third", function(req, res, next) {
	if (req.query.q=="node") {
		    res.render("test1",{title:"NODE JS",topic:"NODE EJS Template",status:0,fruits:["orange","coconut"]});
	}
	else if (req.query.q=="python") {
		    res.render("test1",{title:"Python",topic:"NODE Pyhton Template",status:1, fruits:["cocoa","mango","banana","apple"]});
	}
	else{
		    res.render("test1",{title:"NODE BOOOO JS",topic:"NODE Booo Template",status:2, fruits:[]});

	}
});

app.listen(3000);