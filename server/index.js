const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); //by using the pool, we can run queries with postgres

//middleware
app.use(cors());
app.use(express.json()); //req.body


//ROUTES

//create a todo

app.post("/todos", async(req,res) =>{
    //await
    try{

        console.log(req.body);

    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});