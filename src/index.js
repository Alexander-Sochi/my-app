import React from 'react';
import  ReactDOM  from 'react-dom';
import { TodoList } from './camponents/todo-list';
import { AppHeader } from './camponents/app-header';
import { SearchPanel } from './camponents/search-panel';
 
const App = ()=>{
    const login = <span>Login</span>
    return (
 <div>
    {login}
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>  
 </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
    );