const express = require('express');
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todo = [
//   {
//     message: "wash a car ....",
//     id: 1
//   },
//   {
//     message: "go for run ....",
//     id: 2
//   },
//   {
//     message: "cook dinner....",
//     id: 3
//   }
];

app.get("/", (req, res) => {
  res.status(200).json(todo);
});

app.post("/", (req, res) => {
  const newTodo = {
    message: req.body.message,
    id: uuidv4()
  };
  todo.push(newTodo);
  res.status(201).json(todo);
});
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = todo.findIndex(todoItem => todoItem.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.splice(index, 1);
    res.status(200).json(todo);
  });
  app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    const index = todo.findIndex(todoItem => todoItem.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo[index].message = message;
    res.status(200).json(todo);
  });
  

const Port = 5001;
app.listen(Port, () => {
  console.log(`Server running on port: ${Port}`);
});