
import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import ProjectList from "./components/Project.js";
import  ProjectDetailList from "./components/ProjectDetailList.js";
import TodoList from "./components/Todo.js";
import Footer from "./components/Footer.js";
import MenuList1 from "./components/Menu.js";
import  Notfound404 from "./components/Notfound404.js";
import  LoginForm from "./components/Auth.js";
import  ProjectForm from "./components/ProjectForm.js";
import {HashRouter,BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Cookies from "universal-cookie";


class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {



           "users": [],
           "projects":[],
           'todos':[],
           'token':'',
           'redirect': false
       }

}
// set_token(token){
//          const cookies=new Cookies()
//          cookies.set({'token':token})
//          this.setState({'token':token} ,()=>this.load_data())
//
//      }
is_authenticated(){
         return !!this.state.token
}
logout(){
         localStorage.setItem('token','')
         this.setState({
            'token':''
         },this.load_data)

}
// get_token_from_storoge(){
//          const cookies=new Cookies()
//          const token=cookies.get('token')
//          this.setState({'token':token},()=>this.load_data())
// }
createProject(id,name,repository,users){
          console.log(id,name,repository, users)
         let headers=this.get_headers()
         axios.post(' http://127.0.0.1:8000/api/project/',
             {id:id,name:name,repository:repository,users:users},{headers})
             .then(response=>{
                 this.load_data()

             }).catch(error => {console.log(error)
             this.setState({users:[]})}
         )



}
get_token(login, password) {
         // console.log('get_token:',login,password)
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: login,
        password: password})
        .then(response => {
            const token =response.data.token
             console.log('token:',token)
            localStorage.setItem('token',token)
            this.setState({'token':token},this.load_data)


            // this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль '))
}
get_headers(){
         if(this.is_authenticated()){
             return {
                 'Authorization':'Token '+this.state.token
             }
             return {}
         }
         // let headers={
         //     'Content-Type':'aplication/json'
         // }
         // if (this.is_authenticated()){
         //     headers["Authorization"]='Token'+this.state.token
         // }
         // return headers
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
load_data(){

         let headers=this.get_headers()
         axios.get(' http://127.0.0.1:8000/api/users/',{headers}).then(response=>{
                 const users=response.data
                 this.setState(
                     {
                           'users':users
                  }
               )
             }).catch(error => console.log(error))

         axios.get(' http://127.0.0.1:8000/api/project/',{headers}).then(response=>{
               const projects=response.data.results
             this.setState(
                {
                       'projects':projects
                }
            )
        }).catch(error =>{ console.log(error)
       this.setState({projects: []})})



    axios.get(' http://127.0.0.1:8000/api/TODO/',{headers}).then(response=>{
            const todo=response.data.results
            this.setState(
                {
                       'todos':todo
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
    //  this.get_token_from_storoge()
    let token =localStorage.getItem('token')
    this.setState({
        'token':token
    },this.load_data)

}
    render () {
         return(
             <div>
                 <div>
                      <MenuList1 users={this.state.users}/>
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
                                  <li>
                                      <Link to='/create_project'>Create project</Link>
                                  </li>
                                  <li>
                                      {this.is_authenticated()?
                                          <button onClick={()=>this.logout()}>Logout</button>:
                                      <Link to='/login'>Login</Link>}
                                  </li>
                              </ul>

                          </nav>

                          <Routes>
                              <Route  path='/' element={ <UserList users={this.state.users}/>} />
                              <Route  path='projects' element={ <ProjectList projects={this.state.projects}/> }/>
                              <Route  path='create_project' element={ <ProjectForm
                                  users={this.state.users}
                                  createProject={(id,name,repository,users)=>this.createProject(id,name,repository,users)}/> }/>

                              <Route  path='/todos/' element={ <TodoList todos={this.state.todos}/>} />
                              <Route path='/login' element={<LoginForm
                                  get_token={(login, password) => this.get_token(login, password)} />}/>
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
