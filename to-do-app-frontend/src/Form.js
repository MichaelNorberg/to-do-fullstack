import React from 'react';

//form component for submitting todos
class Form extends React.Component {
    collectTodoData = (event) => {
        console.log(event);
        event.preventDefault();
        let text = this.refs.todoText.value;
        let category = this.refs.category.value;
        this.props.addToDo(text, category);
        this.refs.todoText.value = '';
    };
    render() {
        let formButton= {
            background: '#ff6f69',
        };
        let selectStyle = {
            display: "inline-block",
        };
        let menuStyle= {
            background: '#ff6f69',
        };
        let categoriesArray = this.props.categories;
        let categoriesJSX = categoriesArray.map((category, i) => {
                return  <option value={category._id}
                                key={i}>{category.name}
                        </option>
            });
        return (
            <form onSubmit={this.collectTodoData}>
                <div className="input-group">
                   <span className="input-group-btn">
                       <button style= {formButton} className="btn btn-outline-dark" type="submit">Add</button>
                   </span>
                   <input className="form-control" placeholder="add a todo" type="text"  name="todoText" ref="todoText" />
                </div>
                <div style= {selectStyle} className= "mt-3  mb-3">
                    <select style= {menuStyle} ref="category">
                       {categoriesJSX}
                    </select>
                </div>
            </form>
        );
    };
};

export default Form; 