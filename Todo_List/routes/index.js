const express = require('express');
const Todo = require('../models/tasks.js');
const router = express.Router();

router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(newTodo => res.status(201).json(newTodo))
        .catch(err => res.send(err));
});

router.get('/:todoId', (req, res) => {
    Todo.findById(req.params.todoId)
        .then(foundTodo => res.json(foundTodo))
        .catch(err => res.send(err));
});


module.exports = router;