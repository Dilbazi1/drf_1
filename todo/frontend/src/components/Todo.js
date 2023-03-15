import React from "react";
const TodoItem=({todo})=>{
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

        </tr>
    )
}
const TodoList= ({todos}) =>{
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
            {todos.map((todo)=><TodoItem todo={todo}/>)}
        </table>
    )
}
export default TodoList