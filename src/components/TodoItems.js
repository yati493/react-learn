import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TodoItems extends Component {
    getStyle = () =>{
        if(this.props.todo.completed){
            return{
                background:'#f4f4f4',
                padding:'10px',
                borderBottom:'1px #ccc dotted',
                textDecoration:'line-through'
            }
        }
        else{
            return{
                padding:'10px',
                borderBottom:'1px #ccc dotted',
                textDecoration:'none'
            }
        }
    }
    markComplete(e){
        console.log(this.props)

    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
               <h3>{title}</h3> 
               <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
               </p>
            </div>
        )
    }
}

//PropTypes
TodoItems.propTypes={
    todo: PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
   // float:'right',
    padding:'5px 8px'
}
//export default TodoItems
