import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

export default class TodoApp extends Component {

    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios
            .get('/api/get')
            .then((res) => {
                //todosを更新（描画がかかる）
                this.setState({
                    todos: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タスク</th>
                            <th>完了</th>
                        </tr>
                    </thead>
                        <TodoList
                            todos={this.state.todos}
                        />
                </table>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));