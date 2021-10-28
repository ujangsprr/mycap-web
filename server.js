var http = require('http');
var path = require('path');

var express = require('express');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

router.get("/", function(req, res){
  res.sendFile(__dirname+"/client/index.html")
})

router.get("/contact", function(req, res){
  res.sendFile(__dirname+"/client/contact.html")
})

router.get("/portofolio", function(req, res){
  res.sendFile(__dirname+"/client/portofolio.html")
})

router.get("/tentang-kami", function(req, res){
  res.sendFile(__dirname+"/client/tentang.html")
})

router.get("/blog", function(req, res){
  res.sendFile(__dirname+"/client/blog.html")
})

router.get("/transkip-audio", function(req, res){
  res.sendFile(__dirname+"/client/transkip.html")
})

router.get("/translate", function(req, res){
  res.sendFile(__dirname+"/client/translate.html")
})

router.get("/subtitle", function(req, res){
  res.sendFile(__dirname+"/client/subtitle.html")
})

router.get("/captions-subtitle", function(req, res){
  res.sendFile(__dirname+"/client/captions.html")
})

console.log('Booting up the server! Please wait until finished...')
server.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.address + ":" + addr.port);
});