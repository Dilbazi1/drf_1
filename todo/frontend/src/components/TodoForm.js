import React from "react";
class TodoForm extends React.Component{
    constructor(props) {
        super(props)
        // console.log(props)
        // this.get_token=props.get_token
        this.state={
              
            'text':'',

             "project":0,
            'creator':0,
        }
    }
    handleChange(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        );
    }
   handleProjectSelect(event){

        if(!event.target.selectedOptions){
            this.setState({
                'project':''
            })
            return;
        }
        let project=0
         for(let option of event.target.selectedOptions){
             project=project+(+option.value)
        }

        this.setState({
            'project':project
        })

    }
    handleCreatorSelect(event){

        if(!event.target.selectedOptions){
            this.setState({
                'creator':0
            })
            return;
        }
        let creator=0
         for(let option of event.target.selectedOptions){
           creator=creator+(+option.value)
        }

        this.setState({
            'creator':creator
        })

    }
    handleSubmit(event){
        this.props.createTodo(this.state.text,this.state.project, this.state.creator)


        // console.log(this.state.text,this.state.project,this.state.creator)
        event.preventDefault()
    }
    render() {
        return(
            <div>
            <form onSubmit={(event)=>this.handleSubmit(event)}>


                <input type='text' name='text' placeholder='text' value={this.state.text}
                       onChange={(event) => this.handleChange(event)}/>



                <select  onChange={(event) => this.handleProjectSelect(event)}>
                    {this.props.projects.map((project)=><option value={project.id}>{project.name}</option>) }
                </select>
                  <select  onChange={(event) => this.handleCreatorSelect(event)}>
                    {this.props.users.map((user)=><option value={user.id}>{user.username}</option>) }
                </select>





                <input type='submit' value='Create'/>

            </form>
            </div>

        )
    }
}
export default TodoForm