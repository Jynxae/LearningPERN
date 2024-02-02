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
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",
         [id]
         );
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const todo = await pool.query("UPDATE todo SET description = $1 WHERE  todo_id = $2",
        [description, id]
        );
        res.json("todo was updated");
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("DELETE FROM todo WHERE todo_id = $1",
        [id]
        );
        res.json("todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
});


//IF YOU WANNA CONNECT THEN DO "cd 'C:\Users\realk\OneDrive\Desktop\PERN ToDo\server' THEN node index"
app.listen(5000, () => {
    console.log("server has started on port 5000");
});