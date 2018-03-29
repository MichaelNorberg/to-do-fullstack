const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/ToDoApp';
const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

connection.on('open', () => {
    console.log("connected to mongo!");
});

const ToDo = require('./models/ToDo.js');
const Category = require('./models/Category.js');


app.delete('/todos', (req,res) => {
    let idsToDelete = req.query.completed;
    idsToDelete = idsToDelete.split(",");
    ToDo.remove({
        _id: {$in: idsToDelete}
    })
        .then(deletedToDos => {
            console.log(deletedToDos);
            res.status(200).json({'deleted': deletedToDos});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({msg: 'error!'});
        })
}) 

app.get('/todos', (req,res) => {
    ToDo.find({})
        .then(toDos => {
            res.status(200).json({toDos});
        })
        .catch(error => {
            res.status(500).json({msg: 'error!'});
        });
});

app.post('/newtodo', (req, res) => {
    let newToDo = ToDo({
        text: req.body.text,
        done: false,
        categoryId: req.body.category
    });
    newToDo.save()
    .then(savedToDo => {
        console.log(savedToDo);
        res.status(200).json({savedToDo});
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({msg: 'error!'});
    });
});

app.put('/update', (req,res) => { 
    ToDo.findOneAndUpdate({_id: req.body._id}, {done: req.body.done})
        .then(updatedToDo => {
            res.status(200).json({msg: 'success!'});
            console.log(updatedToDo);
        })
        .catch(error => {
            res.status(500).json({msg: 'error!'});
            console.log(error);
        });
    });
//-------------------------------------------------------------------------------------
app.get('/category', (req,res) => {
    Category.find({})
        .then(categories => {
            res.status(200).json({categories});
        })
        .catch(error => {
            res.status(500).json({msg: 'error!'});
        });
});

app.post('/category', (req, res) => {
    let newCategory = Category({
        name: req.body.text,     
    });
    newCategory.save()
    .then(savedCategory => {
        console.log(savedCategory);
        res.status(200).json({savedCategory});
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({msg: 'error!'});
    });
});

app.listen(8080, () => {
    console.log('server is running on port 8080');
});