import React, { Component } from 'react';
import Form from './Form.js';
import List from './List.js';
import ClearButton from './ClearButton.js';
import Select from './Select.js';
import Counter from './Counter.js';
import AddCategory from './AddCategory.js';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDos:  [],
            disabled: true,
            filter: 'all',
            categories: [],
        };
    };
    //loads todos and categories
    componentDidMount() {
        axios.get('http://localhost:8080/todos')
        .then((response) => {
            let dataToDos =  response.data.toDos;
            console.log(dataToDos);
            for(let i = 0; i < dataToDos.length; i++){
                if (dataToDos[i].done === true) {
                    this.setState({
                        disabled: false,
                    });
                    break;
                };
            };
            this.setState({
                toDos: dataToDos,
            });
        })
        .catch((error) => {
            console.log(error);
        });
        axios.get('http://localhost:8080/category')
        .then((response) => {
            let dataCatagories =  response.data.categories;
            console.log(dataCatagories);
            this.setState({
                categories: dataCatagories,
            });
        })
        .catch((error) => {
            console.log(error)
        });
    };
    //adds a todo to the database
    addToDo = (text, category) => {
        axios.post('http://localhost:8080/newtodo', {text, category})
            .then((response) => {
                let newToDo = response.data.savedToDo;
                let toDoCopy = Array.from(this.state.toDos);
                    toDoCopy.push(newToDo);
                    this.setState({
                        toDos: toDoCopy,
                    });
            })
            .catch((error) => {
                console.log(error);
            });  
    };
    //adds a category to the database
    addCategory = (text) => {
        axios.post('http://localhost:8080/category', {text})
            .then((response) => {
                let newCategory = response.data.savedCategory;
                let categoriesCopy = Array.from(this.state.categories);
                    categoriesCopy.push(newCategory);
                    this.setState({
                        categories: categoriesCopy,
                    });
            })
            .catch((error) => {
                console.log(error);
            });  
    };
    //toggles done radial and updates database
    toggleDone = (id) => {
        let toUpdate;
        let toDoCopy= this.state.toDos.map((toDo, i)=>{
            if(toDo._id === id){
                toDo.done = !toDo.done;
                toUpdate = toDo;
            };
            return toDo;
        });
        axios.put('http://localhost:8080/update', toUpdate)
        .then((response) => {
            console.log(response)
            this.setState({
                toDos: toDoCopy,
                disabled: false,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
    //clears todos from the list
    clearToDo = () => {
        let stillToDo = [];
        let completed = [];
        let toDoCopy = Array.from(this.state.toDos);
        for(let i = 0; i < toDoCopy.length; i++) {
            if (toDoCopy[i].done === false){
                console.log('IN THE IF STATEMENT');
                stillToDo.push(toDoCopy[i]);
            }
            else {
                completed.push(toDoCopy[i]._id);
            }
       };
       completed = completed.join(",");
       axios.delete('http://localhost:8080/todos?completed=' + completed)
        .then((response) => {
            console.log(response)
            this.setState({
                toDos: stillToDo,
                disabled: true,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
    //filters todos based on 3 possible states
    filterToDos = (e) => {
        this.setState({
            filter: e.target.value,
        });
    };

  render() {
    let titleStyle = {
        fontFamily: 'Cabin Sketch, cursive',
        background: '#96ceb4',
    };
    return (
        <div style= {titleStyle} className="container p-5">
            <h1 className="text-center">Michael's Todo App</h1>
            <AddCategory addCategory={this.addCategory}/>
            <Form categories={this.state.categories} addToDo={this.addToDo}/> 
            <List toDos={this.state.toDos} toggleDone={this.toggleDone} filter={this.state.filter} />
            <Select filterToDos= {this.filterToDos}/>
            <ClearButton disabled={this.state.disabled} clearToDo= {this.clearToDo}/>
            <Counter toDos={this.state.toDos}/>
        </div>
    );
  };
};

export default App;
