let dummyPortNumber = 3333;

const express = require('express');
const app = express();


// Middleware


app.use(function(req,res,next){

    console.log("Time: ", Date.now() + "Log all requests");
    next();

});


app.use(function(req,res,next){


    //Check if someone is logged in

    req.status = "SuperUser";
    next();
});


app.get("/", (req, res)=>{


    const status = req.status;

    if(status === LazyUser){

        "Lazy User";

    }

    res.send('Hello' + status);

});

app.get("/world", (req, res)=>{

    res.send('Hello World');

});

app.listen(dummyPortNumber, ()=>console.log('Server Started..'));
