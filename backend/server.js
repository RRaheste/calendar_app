const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

app.post('/tasks', (req, res) => {
    const newTask = new Task(req.body);
    newTask.save()
        .then(task => res.json(task))
        .catch(err => res.status(500).json({ error: 'Error creating task' }));
});

app.get('/tasks', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).json({ error: 'Error fetching tasks' }));
});

app.listen(3000, () => console.log('Server running on port 3000'));