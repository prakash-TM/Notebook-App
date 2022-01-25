const Mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
import noteBookRouter from "./src/api/notebooks/add/routes";
import notesRouter from "./src/api/notes/add/routes"
import userRouter from "./src/api/users/add/routes"

// Creating db
const initConnection = async() => {
    await Mongoose.connect("mongodb://localhost/Coherence");
};

initConnection();

// For parsing application/json
app.use(express.json());

app.use("", noteBookRouter);
app.use("",notesRouter)
app.use("",userRouter)

app.listen(port, () => {
    console.log("server is running at localhost:", port);
});