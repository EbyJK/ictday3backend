// importing express

var express=require('express');

//Initialization

var app= express();

//middleware

//api              //login  request and response
//app.get('url',(req,res)=>{})
    app.get('/',(req,res)=>{  // '/' indicates current open and using port
        res.send("Hello World!!");

    });
app.get('/login',(req,res)=>{
    res.send("heloo Eby");
});
//port assigning

app.listen(3000,(req,res)=>{
    console.log("port is up and running")


})

