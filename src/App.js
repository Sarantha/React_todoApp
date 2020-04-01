import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import Back from './images/bck.png';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css';
import { render } from 'react-dom';


class App extends Component {
  state = {
    todos:[
      /*{
        id:uuidv4(),
        title: "Study File Structure",
        completed:false
      },
      {
        id:uuidv4(),
        title: "Create Component",
        completed:false
      },
      {
        id:uuidv4(),
        title: "Study State",
        completed:false
      }*/
    ]
  }
  //
  markComplete = (id) => {
         this.setState({ todos: this.state.todos.map(todo => {
           if(todo.id === id){
             todo.completed = !todo.completed
           }
           return todo;
         }) });
  }
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  addTodo = (title) =>{
    const newTodo = {
      id:uuidv4(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render(){
    //console.log(this.state.todos)
    return (
      <Router>
      <div className="App" styles={{ backgroundImage:`url(${Back})` }}>
        <Header/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
