import React from "react";


class AddForm extends React.Component {
    state = {
        title: "",
        salary: "",
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(">>> Check data input:", this.state)
        if(!this.state.title || !this.state.salary){
            alert("Missing parameter!!!")
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random()* 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        alert("Submit Success!!!")
        this.setState({
            title: "",
            salary: ""
        })
    }

    

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title's Jobs</label><br />
                    <input
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJobs(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary</label><br />
                    <input
                        type="text" 
                        value={this.state.salary} 
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>          
                           
            </>
      )

        
    }
  }
  export default AddForm;