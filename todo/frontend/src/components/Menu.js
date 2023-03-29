import React from 'react';
import UserList from "./User.js";
import './Menu.css';

const UserItem=({user})=>{
    return (
        <li>

               <a>{user.username}</a>
        </li>

    )
}
const MenuList1= ({users}) =>{

    return(
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            {/*{users.map((user)=><UserItem user={user}/>)}*/}





        </div>
    )

}
export default MenuList1






