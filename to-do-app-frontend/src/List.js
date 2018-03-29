import React from 'react';
import Todo from './Todo.js';

class List extends React.Component {
    render() {
        //conditionally renders todos based on the selected state of the select bar
        let toDoArray = this.props.toDos;
        let toDosListJSX;
        if(this.props.filter === 'all'){
            // render all my to dos
            toDosListJSX = toDoArray.map((toDo, i) => {
                return <Todo text = {toDo.text}
                             done = {toDo.done}
                             toggleDone ={this.props.toggleDone}
                             id = {toDo._id}
                             key= {i}
                        />
            });
        };
        if(this.props.filter === 'active'){
            // render todos that arnt done
            toDosListJSX = toDoArray.filter((toDo) => toDo.done === false)
            .map((toDo, i) => {
                return  <Todo text = {toDo.text}
                              done = {toDo.done}
                              toggleDone ={this.props.toggleDone}
                              id = {toDo._id}
                              key= {i}
                        />
            });
        };
        if(this.props.filter === 'complete'){
            //render todos that are done
            toDosListJSX = toDoArray.filter((toDo) => toDo.done === true)
            .map((toDo, i) => {
                return  <Todo text = {toDo.text}
                              done = {toDo.done}
                              toggleDone ={this.props.toggleDone}
                              id = {toDo._id}
                              key= {i}
                        />
            });
        };
        return (
            <ul className="list-group">
                {toDosListJSX}
            </ul>
        );
    };
};
export default List;




