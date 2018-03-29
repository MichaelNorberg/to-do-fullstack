import React from 'react';

//form component for submitting todos
class AddCategory extends React.Component {
    collectCategoryData = (event) => {
        console.log(event);
        event.preventDefault();
        let text = this.refs.categoryText.value;
        this.props.addCategory(text);
        this.refs.categoryText.value = '';
    };
    render() {
        let formButton= {
            background: '#ff6f69',
        };
        return (
            <form onSubmit={this.collectCategoryData}>
                <div className="input-group">
                   <span className="input-group-btn">
                       <button style= {formButton} className="btn btn-outline-dark" type="submit">Add</button>
                   </span>
                   <input className="form-control" placeholder="add a todo category" type="text"  name="categoryText" ref="categoryText" />
                </div>
            </form>
        );
    };
};

export default AddCategory; 