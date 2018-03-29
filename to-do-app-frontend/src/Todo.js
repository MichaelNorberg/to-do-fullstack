import React from 'react';

// for each individual todo component
class Todo extends React.Component {
    render() {
        let doneStyle = {
            textDecoration: 'line-through', 
            color: 'grey',
        };
        let todoStyle = {
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '1.7rem',
            background: '#ffeead'
        }
        return (
            <li style= {todoStyle} className="list-group-item">
            <input type="checkbox" checked={this.props.done} onChange={()=>this.props.toggleDone(this.props.id)} />
            <label className= "ml-2" style= {this.props.done ? doneStyle: {} } >{this.props.text}</label>
            </li>
        );
    };
};

export default Todo; 