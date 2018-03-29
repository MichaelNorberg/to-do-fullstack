import React from 'react';

//drop down select menu to view todos based on completeness
class Select extends React.Component {
    render() {
        let selectStyle = {
            display: "inline-block",
        };
        let menuStyle= {
            background: '#ff6f69',
        };
        return (
            <div style= {selectStyle} className= "mt-3  mb-3">
                <select style= {menuStyle} onChange={(e) => {this.props.filterToDos(e)}}>
                    <option value="all">all</option>
                    <option value="active">active</option>
                    <option value="complete">complete</option>
                </select>
            </div>
        );
    };
};

export default Select;