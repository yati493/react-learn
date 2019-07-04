import React,{Component}from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import uuid from 'uuid';
import Header from './components/layout/Header';
import axios from 'axios';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
import { tsExpressionWithTypeArguments } from '@babel/types';

class App extends Component{

  state={
    todos: [
      {
        id: uuid.v4(),
        title:'Take out the trash',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Learn React',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'search for accomodation',
        completed:false
      }
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>console.log(res.data))
  }

  
//Toggle Complete
  markComplete =(id) => {
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })});

  }


  //Add Todo

  addTodo=(title) =>{
    const newTodo={
      id:uuid.v4(),
      title:title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});

  }
//Delete Todo

delTodo=(id) => {
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
}
  render(){
    //console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
        <div className="container">
       <Header/>
       <Route exact path="/" render={props=>(
         <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
           <Todos todos={this.state.todos} markComplete={this.markComplete}
           delTodo={this.delTodo} />

         </React.Fragment>
       )}></Route>
       <Route path="/about" component={About}/>
       
        </div>
      </div>
      </Router>
    );
  }
}



export default App;
