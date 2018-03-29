import React from 'react';

class Counter extends React.Component {
    render() {
        let all = this.props.toDos.length;
        let active;
        let complete;
        this.props.toDos.reduce((acc, todo)=> {
            if(todo.done) {
                acc++;
                return complete = acc;
            }
            else {
                return acc;
            }
        }, 0);
        this.props.toDos.reduce((acc, todo)=> {
            if(!todo.done) {
                acc++;
                return active = acc;
            }
            else {
                return acc;
            }
        }, 0);
        let counterStyle = {
            border: "#ced4da solid thin",
            width: "50%",
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '1rem',
            background: '#ffeead',
        }
        return (
            <div style= {counterStyle}>
                <table className= "table mt-0" >
                    <tbody>
                        <tr>
                            <th scope="row">All</th>
                            <td>{all}</td>
                        </tr>
                        <tr>
                            <th scope="row">Active</th>
                            <td>{active}</td>
                        </tr>
                        <tr>
                            <th scope="row">Complete</th>
                            <td>{complete}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Counter;