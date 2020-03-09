import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todoList = [
  {
    task: 'Finish MVP goals',
    id: new Date(),
    completed: false
  },
  {
    task: 'Style my app',
    id: new Date(),
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList,
      task: ''
    };
  }

  toggleCompleted = clickedItemId => {
    this.setState ({
      todoList: this.state.todoList.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

clearCompleted = () =>{
  this.setState({
    todoList: this.state.todoList.filter(item => item.completed === false)
  })
}
    

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };
  
  render() {
    return (
      <div className="App">
        <div>
        <h1>Todo App: MVP</h1>
        <TodoForm addItem={this.addItem}/>
      </div>
        <TodoList
        todoList={this.state.todoList}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
