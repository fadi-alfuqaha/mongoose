const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {type :String , unique:true},
    description: {type :String},
    deadline: {type :Date},
    isCompleted: {type :Boolean},
    priority :{type :Number}
})

const toDo = mongoose.model('toDo', todoSchema);

const createTodo = (listItem) => {
    const item = new toDo(
        {
            task: listItem.task,
            description: listItem.description,
            deadline: listItem.deadline,
            isCompleted: listItem.isCompleted,
            priority: listItem.priority
         }
    
    );
    return item.save();
}

const updateTodo = (listItem) => {

    toDo.update()
    toDo.findOne({ task:listItem.task}, (err,doc) => {
        doc.description = listItem.description;
        doc.deadline = listItem.deadline;
        doc.isCompleted = listItem.isCompleted;
        doc.priority = listItem.priority;
        doc.save()

    })
}


module.exports = {
    createTodo
}


