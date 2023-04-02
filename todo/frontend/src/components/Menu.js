import React from 'react';

import './Menu.css';

import { Link ,BrowserRouter} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

 class MenuList1 extends React.Component{
  constructor(props) {
    super(props)


    this.searchItem = this.props.searchItem
    this.state = {
      "search": "",

    }
  }
   handlePress(target) {
    target.nextElementSibling.value = "";
    this.setState({"search": ""}, () => this.searchItem(""))
  }

  handleChange(target) {
    this.setState({[target.name]: target.value})
  }

  handleSubmit() {

    this.searchItem(this.state.search)
  }
  render() {
    return (

      <form onSubmit={(event)=>this.handleSubmit(event)}>
          <div >




                {this.state.search
                ?<Button className="me-2" type="button" variant="outline-success" onClick={({target}) => this.handlePress(target)}>Clear</Button>
                : null}
          <input
                type="search"
                name="search"
                placeholder="Project search"

                onChange={({target}) => this.handleChange(target)}
              />

            <Button>
             <Link  to='../projects'
										onClick={() => this.handleSubmit()}>Search</Link>
             </Button>
         </div>
            </form>
                )
  }
}

 export default MenuList1






