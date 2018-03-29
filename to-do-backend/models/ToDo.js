const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = mongoose.Schema.Types.ObjectId;

const toDoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category'
    }
});

const ToDoModel = mongoose.model('ToDo', toDoSchema);

module.exports = ToDoModel;