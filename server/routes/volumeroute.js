var express = require("express");
var router = express.Router();
var volume = require("../Models/data")
var QanoonController = require('../controller/QanoonController')

router.get('/getallqanoon',QanoonController.Allvolume)
router.post("/createqanoon",QanoonController.Createvolume);
router.get("/getoneqanoon/:id",QanoonController.GetOnevolume);
router.put("/updateqanoon/:id",QanoonController.Updatevolume);
router.delete("/deleteqanoon/:id",QanoonController.Deletevolume);
router.post("/createmessage",QanoonController.Createmessage);
router.get('/getallmessage',QanoonController.Allmessages);
router.post("/createfeedback",QanoonController.Createfeedback);
router.delete("/deletefeedback/:id",QanoonController.Deletefeedback);
router.get('/getlatestmessage',QanoonController.getonemessage);

module.exports=router