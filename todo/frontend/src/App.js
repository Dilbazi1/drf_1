import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";
import Footer from "./components/Footer.js";
import UserList1 from "./components/Menu.js";
import {HashRouter,Route} from "react-router-dom";


class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {
           "users": [],
           "projects":[],
           'todos':[]
       }

}
componentDidMount() {
    // const users = [
    //     {
    //         'username': 'alex',
    //         'first_name': 'alex',
    //         'last_name': 'sidorov',
    //         'email': 'alex@bk.ru'
    //     },
    //
    //     {
    //         'username': 'sergey',
    //         'first_name': 'sergey',
    //         'last_name': 'smirnov',
    //         'email': 'sergey@bk.ru'
    //     }]
    //     this.setState(
    //             {
    //                    'users':users
    //             }
    //         )
    axios.get(' http://127.0.0.1:8000/api/users/').then(response=>{
            const users=response.data.results
            this.setState(
                {
                       'users':users
                }
            )
        }).catch(error => console.log(error))

    axios.get(' http://127.0.0.1:8000/api/project/').then(response=>{
            const projects=response.data.results
            this.setState(
                {
                       'projects':projects
                }
            )
        }).catch(error => console.log(error))



    axios.get(' http://127.0.0.1:8000/api/TODO/').then(response=>{
            const todo=response.data.results
            this.setState(
                {
                       'todos':todo
                }
            )
        }).catch(error => console.log(error))


}

    render () {
         return(
             <div>
                 <div>
                      <UserList1 users={this.state.users}/>
                 </div>

                  <div>
                      <HashRouter>
                      <UserList users={this.state.users}/>
                      <ProjectList projects={this.state.projects}/>
                      <TodoList todos={this.state.todos}/>
                      </HashRouter>
                  </div>

                  <div className="App">

                     <Footer/>
                  </div>
             </div>


         )



    }



}






export default App;