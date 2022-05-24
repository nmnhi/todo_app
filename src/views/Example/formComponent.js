import React from "react";
// import ChildComponent from "../../components/childComponent";
import ConditionOutput from "../../components/ConditionOutput";

class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            {id: "Engineer", title: "Developer", salary: "500"},
            {id: "Senior Engineer", title: "Tester", salary: "400"},
            {id: "Director", title: "PM", salary: "1000"}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        alert("Submit Success!!!")
        console.log(">>> Check data input:", this.state)
    }



    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text" 
                        value={this.state.lastName} 
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                {/* Props */}
                {/* <ChildComponent
                    name={this.state.firstName}
                    age={"28"}
                    address={"Ha Noi"}
                    arrJobs={this.state.arrJobs}
                /> */}

                {/* Condition Output */}
                <ConditionOutput
                    name={this.state.firstName}
                    age={"28"}
                    address={"Ha Noi"}
                    arrJobs={this.state.arrJobs}
                />
                
                
            </>
      )

        
    }
  }
  export default Form;