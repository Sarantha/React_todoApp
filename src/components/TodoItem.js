import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            borderRadius:'8px',
            marginRight: '400px',
            marginLeft: '400px',
            backgroundColor: '#ffb14a',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration : 'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration : 'none'
        //     }
        // }
    }

    markComplete = (e) =>{
        console.log(this.props)
    }

    render() {
        const {id,title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//styles

const btnStyle ={
    backgroundColor: 'red',
    color:'#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right',
    testAlign: 'center',
    
}

export default TodoItem
