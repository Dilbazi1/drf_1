import React from "react";
const UserItem=({user})=>{
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>

        </tr>
    )
}
const UserList= ({users}) =>{
    return(
        <table>
            <thead>
            <tr>
               <th>
                Username
               </th>
               <th>
                 Firstname
                </th>
               <th>
                Lastname
               </th>
                <th>
                Email
                </th>
             </tr>
            </thead>
            {users.map((user)=><UserItem user={user}/>)}
        </table>
    )
}
export default UserList