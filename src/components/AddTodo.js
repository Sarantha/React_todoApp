import React, { Component } from 'react'

export class AddTodo extends Component {
    state ={
        title: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title : ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex',marginRight: '400px',marginLeft: '400px'}}>
                <input type="text" name="title" style={{flex:'10',padding:'15px',borderRadius:'10px'}} placeholder="Add todo.." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" style={{flex: '1',background: '#ad6200',color:'#fff',borderRadius:'10px',hover:'#2f302f'}} value="Add to list"/>
            </form>
        )
    }
}

export default AddTodo
