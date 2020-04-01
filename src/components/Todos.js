import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
    // markComplete = () => {
    //     console.log('hello')
    // }
    render(){
        return this.props.todos.map((todo) =>(
        <TodoItem style={itemStyle} key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

const itemStyle ={
    marginRight: '400px',
    marginLeft: '400px'
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;
