const express = require("express"); //used in creating a server
const cors = require("cors")    //used in front-to-back connection necessary for functionality
const bodyParser = require("body-parser");  //used to parse data being passed from the body of the frontend
const mongoose = require('mongoose');   //used to code the specifics of the DB 
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const userCred = require('./user');

const server = express();   //establishing the server


//MIddlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors({
    origin: "http://localhost:3000", //location of the react app that we are connecting to 
    credentials: true
}))

server.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));

server.use(cookieParser("secretcode"))

server.use(passport.initialize());
server.use(passport.session());
require('./passportConfiguration')(passport);


mongoose.connect('mongodb://localhost:27017/convocationdb', {useNewUrlParser: true, useUnifiedTopology: true}); 
//useNewUrlParser is used to fix deprecation warnings

const Schema  = mongoose.Schema; //making a new instance of schema 
const studentInfoSchema = new Schema({  //adding details of what the shcma contains
  firstName:String,
  lastName:String,
  regno:String,
  email:String,
  studentNo:String,
  parentNo:String,
  bloodgrp:String,
  program:String,
  dept:String,
  gradyear:String,
  gradmonth:String,
  address:String,
  city:String,
  state:String,
  zip:String,
  familyCount:String,
  chosenDate:String
})

/* function (passport){
    passport.use(
        new localStrategy((email ,password, done) => {
            userCred.findOne({email:email}, (err, userCred) => {
                if(err) throw err;
                if(!user) return done(null, false);
                bcrypt.compare(password, userCred.password, (err, result) => {
                    if(err) throw err;
                    if(result === true) {
                        return done(null, userCred)
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    );

    passport.serializeUser ((userCred, cb) => {
        cb(null, userCred.id);
    })
    passport.deserializeUser((id, cb) =>{
        userCred.findOne({_id: id}, (err, userCred) => {
            cb(err, userCred);
        })
    })
} */



const studentInfo = mongoose.model("studentInfo", studentInfoSchema);   //creating a new instance of mongoose model

const convocationDatesSchema = new Schema({
    firstDate:String,
    secondDate:String,
    thirdDate:String
})

const convocationDates = mongoose.model("convocationDates", convocationDatesSchema);




server.post("/login", (req, res) => {
    userCred.findOne({email: req.body.email}, (err, docs) =>{
        if(err) throw err;
        if(docs) {
            if(docs.email === "Admin"){
            res.send("Admin");
            }
            else {
            res.send("match found");
            }
        }
    })
    /* passport.authenticate("local", (err, userCred, info) =>{
        if(err) throw err;
        if(!userCred) {res.send("No user exists"); console.log(res.data);}        
        else {
            req.logIn(userCred, err => {
                if(err) throw err ;
                res.send("successfully authenticated!!");
                console.log(req.userCred);
            })
        }
    })(req, res, next);  */
})

server.post("/register", (req,res) => {
    userCred.findOne({email: req.body.email}, async (err, doc) => {
        if(err) throw err;
        if(doc) res.send("User already exists");
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new userCred({
                email: req.body.email,
                password: hashedPassword
            });
            await newUser.save();
            console.log(newUser);   
            res.send("user created")         // res.render("http:localhost:3000/login")
        }
    })
})

//used to POST data to DB
server.post("/sendData", function(req,res){
    const doc = new studentInfo();
    doc.firstName = req.body.firstName;
    doc.lastName = req.body.lastName;
    doc.regno = req.body.regno;
    doc.email = req.body.email;
    doc.studentNo = req.body.studentNo ;
    doc.parentNo = req.body.parentNo ;
    doc.bloodgrp = req.body.bloodgrp ;
    doc.program = req.body.program ;
    doc.dept = req.body.dept ;
    doc.gradyear = req.body.gradyear ;
    doc.gradmonth = req.body.gradmonth ;
    doc.address = req.body.address ;
    doc.city = req.body.city ;
    doc.zip = req.body.zip ;
    doc.familyCount = req.body.familyCount ;
    doc.chosenDate = req.body.chosenDate ;
    doc.save();
    console.log(doc);
})

//to GET all info in DB
server.get("/steal", function(req,res){
    studentInfo.find({}, function(err, docs){
        console.log("these are all the collections in our database:");        
        console.log(docs);
        res.json(docs);        
    })
})



//attempt to modify dates from admin page
/* server.get("/getDates", function(req, res){
    convocationDates.find({}, function(err, docs){
        console.log("These are the dates in the Database:");
        console.log(docs);
        res.json(docs);
        
    })
}) */




//setting preliminary dates for convocation 
/* server.post("/setDates", function(req, res){
    const g = new convocationDates();
    g.firstDate = "10th July";
    g.secondDate = "12th July";
    g.thirdDate = "14th July";
    g.save();
    res.json(g);
    console.log(g);
})
 */
//Database was successfully connected using this block of code
/* server.post("/post", function(req,res){
    let doc = new studentInfo();
    doc.firstName = "example-first-Name";
    doc.lastName = "example-last-name";
    doc.regno = "179202121";
    doc.email = "example@website.com";
    doc.studentNo = "1234567890";
    doc.parentNo = "0987654321";
    doc.bloodgrp = "A+";
    doc.program = "btech";
    doc.dept = "IT";
    doc.gradyear = "2021";
    doc.gradmonth = "May";
    doc.address = "home, city, state";
    doc.city = "city";
    doc.zip = "888777";
    doc.familyCount = "4";
    doc.chosenDate = "12";
    doc.save();
    res.json(doc);
    console.log(doc);
    
}) */

//trial GET
/* server.get("/post",function(req,res){
    studentInfo.find({}, function(err, docs){
        console.log(docs);
        res.json(docs);        
    })
}); */


//very first server check trial
/* server.get("/demo",function(req,res){
    res.send("hello");
}) */

//start server
server.listen(8080,function(){
    console.log("server started")
})
