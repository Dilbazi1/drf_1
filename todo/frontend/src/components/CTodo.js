import React from 'react'
class CForm extends React.Component {
     constructor(props) {
         super(props)
         this.state = {text: '', project: props.projects[0].id,creator:props.users[0].id}
}
    handleChange(event) {
         this.setState({
                 [event.target.name]: event.target.value});
}
    handleSubmit(event) {
         this.props.cTodo(this.state.text, this.state.project,this.state.creator)
         event.preventDefault()
}
    render() {
         return (
             <form onSubmit={(event)=> this.handleSubmit(event)}>
                 <div className="form-group">
                     <label for="login">text</label>
                     <input type="text" className="form-control" name="text"
                            value={this.state.text} onChange={(event)=>this.handleChange(event)} />
                 </div>
                 <div className="form-group">
                     <label for="project">project</label>
                     <select name="project" className='form-control'
                             onChange={(event)=>this.handleChange(event)}>{this.props.projects.map((item)=><option

                         value={item.id}>{item.project}</option>)}

                     </select>
                 </div>
                 <input type="submit" className="btn btn-primary" value="Save" />
             </form>
         );
}
}
export default CForm