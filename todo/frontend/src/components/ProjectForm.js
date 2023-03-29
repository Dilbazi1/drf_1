import React from "react";
class ProjectForm extends React.Component{
    constructor(props) {
        super(props)
        // console.log(props)
        // this.get_token=props.get_token
        this.state={
              
            'name':'',
            'repository':'',
            'users':[]
        }
    }
    handleChange(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        );
    }
    handleUsersSelect(event){
        if(!event.target.selectedOptions){
            this.setState({
                'users':[]
            })
            return;
        }
        let users=[]
        for(let option of event.target.selectedOptions){
            users.push(+option.value)
        }

        this.setState({
            'users':users
        })

    }
    handleSubmit(event){
        this.props.createProject(this.state.name,this.state.repository, this.state.users)
        //
        // console.log(this.state.id,this.state.name,this.state.repository, this.state.users)
        event.preventDefault()
    }
    render() {
        return(
            <div>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                 {/*// <input type='number' name='id' placeholder='id' value={this.state.id}*/}
                 {/*//        onChange={(event) => this.handleChange(event)}/>*/}

                <input type='text' name='name' placeholder='name' value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type='text' name='repository' placeholder='repository' value={this.state.repository}
                    onChange={(event) => this.handleChange(event)}/>
                  {/*<input type='number' name='users' placeholder='users' value={this.state.users}*/}
                  {/*     onChange={(event) => this.handleChange(event)}/>*/}

                <select   multiple onChange={(event) => this.handleUsersSelect(event)}>
                    {this.props.users.map((user)=><option value={user.id}>{user.username}</option>) }
                </select>





                <input type='submit' value='Create'/>

            </form>
            </div>

        )
    }
}
export default ProjectForm