import React from 'react';

//clears done todos from the todo list
class ClearButton extends React.Component {
    render() {
        let clearStyle = {
            display: "inline-block"
        };
        let buttonStyle= {
            background: '#ff6f69',
        };
        return (
            <div style= {clearStyle} className= "float-right mt-2 mb-2">
                <button className="btn btn-outline-dark"
                        style= {buttonStyle} 
                        disabled={this.props.disabled} 
                        onClick= {this.props.clearToDo}>Clear Complete</button>
            </div>
        );
    };
};

export default ClearButton;