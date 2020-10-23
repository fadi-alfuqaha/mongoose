const express = require("express");
const {createTodo} = require("./schema");
const db = require("./db");


const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  
});
app.post("/create/todo", async (req, res) => {
  try {
    res.json(await createTodo(req.body));
  } catch (error) {
    console.log("Besslan "+error)
  }
 
});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});