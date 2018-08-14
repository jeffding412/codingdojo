console.log('task.js works');

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
}, {timestamps:true});

mongoose.model("Task", TaskSchema);