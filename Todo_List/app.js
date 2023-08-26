#!/usr/bin/node

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const todos = [{
  id: 1,
  title: 'lunch',
},
{
  id: 2,
  title: 'dinner',
},
{
  id: 3,
  title: 'breakfast',
},
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    todos,
  });
});

app.post('/', (req, res) => {
  const inputTodoId = todos.length + 1;
  const inputTodoTask = req.body.todoTask;

  todos.push({
    todoId: inputTodoId,
    todoTask: inputTodoTask,
  });

  res.render('index', {
    data: todos,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
