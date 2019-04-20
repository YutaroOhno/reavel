import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.text}</td>
        </tr>
    );
  }

}

export default Todo