const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());


app.listen(5000, () => {
    console.log("server has started on port 5000");
});