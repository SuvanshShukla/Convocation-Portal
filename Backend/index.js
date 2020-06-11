const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const server = express();

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/convocationdb', {useNewUrlParser: true});

const Schema  = mongoose.Schema;
const studentInfoSchema = new Schema({
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

const studentInfo = mongoose.model("studentInfo", studentInfoSchema);

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

server.get("/steal", function(req,res){
    studentInfo.find({}, function(err, docs){
        console.log("these are all the collections in our database:");        
        console.log(docs);
        res.json(docs);        
    })
})

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


server.listen(8080,function(){
    console.log("server started")
})