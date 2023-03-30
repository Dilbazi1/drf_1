import React from "react";
const TodoItem=({todo,deleteTodo})=>{
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.creator}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id) }>Delete</button>
            </td>

        </tr>
    )
}
const TodoList= ({todos,deleteTodo}) =>{
    return(
        <table>
            <thead>
            <tr>
               <th>
                Id
               </th>
               <th>
                 Text
                </th>
               <th>
                Project
               </th>
                <th>
                Creator
                </th>
             </tr>
            </thead>
            {todos.map((todo)=><TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
        </table>
    )
}
export default TodoList