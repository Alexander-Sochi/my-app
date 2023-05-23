import React from "react"
import { TodoListItem } from "./todo-list-item"
const todos = [ 
    {
    label:'Привет,мир!',
    important:true, 
    id:1
    },
    {
    label:'Hello World!',
    important:false, 
    id:2 
    },
    {
    label:'Developer',
    important:false, 
    id:3
    },
    {
    label:'Разработчик',
    important:true, 
    id:4
    },
];
const TodoList = ()=>{
const element = todos.map((item)=>{
    const {id, ...itemProps} = item
    return(
        <li key={item.id}>
             <TodoListItem {...itemProps}
        /></li>
       

    )
})
return(
    <ul>
           {element}    
        </ul>)
        

}

export {TodoList}