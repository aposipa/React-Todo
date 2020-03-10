import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }


handleChanges = event => {
    this.setState({
        item: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
        item: ''
    });
};

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
            />
            <button>Add Todo</button>
        </form>
        
     );
    }
}
export default TodoForm