import React, { Component } from 'react';

import './todo-list-item.css';
class TodoListItem extends Component {
  state = {
    done:false,
    important:false
  }
 onLabelClick = () =>{
    this.setState((state)=>{
      return{done:!state.done}
        
     
    
    })
 }
 onImportantClick = () => {
  this.setState((state)=>{
    return{
       important:!state.important
    }
       
    
  
  })
 }
  render(){
    const {label} = this.props
    const {done,important} = this.state
    let className = 'todo-list-item'
    if(done){
      className += ' done'
    }
    if(important){
      className  +=' important'
      
    }
    
  
    return (
      <span className= {className}>
        <span
          className="todo-list-item-label"
          onClick = {this.onLabelClick}
          >
            
          {label}
        </span>
  
        <button type="button"
                onClick = {this.onImportantClick}
                className="btn btn-outline-success btn-sm float-right">
                  
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
          onClick={this.props.onDelete}
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };


  }


  

export {TodoListItem};
