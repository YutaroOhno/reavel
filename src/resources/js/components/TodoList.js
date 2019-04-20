    
import React, { Component } from 'react';
import Todo from './Todo';
import axios from 'axios'

class TodoList extends Component {

  render() {
      const todos = this.props.todos.map( todo =>
            <Todo
            key={todo.id}
            {...todo}
            />
      )

      return(
          <tbody>
            {todos}
          </tbody>
      )
  }
}

export default TodoList