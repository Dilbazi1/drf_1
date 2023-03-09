import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import ProjectList from "./components/Project.js";
import  ProjectDetailList from "./components/ProjectDetailList.js";
import TodoList from "./components/Todo.js";
import Footer from "./components/Footer.js";
import UserList1 from "./components/Menu.js";
import  Notfound404 from "./components/Notfound404.js";
import {HashRouter,BrowserRouter,Route,Routes,Link} from "react-router-dom";


class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {



           "users": [],
           "projects":[],
           'todos':[],
       }

}
getProject(id){
         axios.get(' http://127.0.0.1:8000/api/project/'`${id}`).then(response=>{
             console.log(response.data.results)
             const projects=response.data.results
            this.setState(
                {
                       'project':projects
                }
            )
        }).catch(error => console.log(error))




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

                      <BrowserRouter>
                          <nav>
                              <ul>
                                  <li>
                                      <Link to='/' > Users</Link>
                                  </li>
                                  <li>
                                      <Link to='/projects'>Projects</Link>
                                  </li>
                                  <li>
                                      <Link to='/todos'>Todos</Link>
                                  </li>
                              </ul>
                          </nav>

                          <Routes>
                              <Route  path='/' element={ <UserList users={this.state.users}/>} />
                              <Route  path='projects' element={ <ProjectList projects={this.state.projects}/> }/>

                              <Route  path='/todos/' element={ <TodoList todos={this.state.todos}/>} />
                               <Route path='project/:id' element={<ProjectDetailList projects={this.state.projects}/>}/>
                               <Route  path='*' element={<Notfound404/>}/>
                          </Routes>



                      </BrowserRouter>
                  </div>

                  <div className="App">

                     <Footer/>
                  </div>
             </div>


         )



    }



}






export default App;