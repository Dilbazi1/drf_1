import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {
         "users": []
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
            const users=response.data
            this.setState(
                {
                       'users':users
                }
            )
        }).catch(error => console.log(error))

}

    render () {
         return(
             <div>
                  <div>
                      <UserList users={this.state.users}/>
                  </div>

                  <div className="App">

                     <Footer/>
                  </div>
             </div>


         )



    }



}






export default App;