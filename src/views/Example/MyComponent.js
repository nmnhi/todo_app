import React from "react";
import ConditionOutput from "../../components/ConditionOutput";



class MyComponent extends React.Component {

    /*
        JSX => return block
    */
    // key:value
  
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            {id: "Engineer", title: "Developer", salary: "500"},
            {id: "Senior Engineer", title: "Tester", salary: "400"},
            {id: "Director", title: "PM", salary: "1000"}
        ]
    }

    handleOnChangeName = (event) => {
        // this.state.name = event.target.value;
        this.setState({
            name: event.target.value
        })
        this.setState({
            country: event.target.value
        })
    }
    
    handleClickButton = () =>{
        alert("Submit Success!!!")
    }

    render() {
        let name = "Minh Nhi"
        let country = "Long An"

        return(
            <>
                <div className="first">
                    {/* {console.log("My name is ", name)} */}
                    Hello everyone, my name is {name}
                </div>

                <div className="second" >
                    My country is {country}
                </div>

                <div>
                    ****************************************
                </div>

                <div className="first">
                {/* {console.log("My name is ", name)} */}
                    {/* Create input */}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello everyone, my name is {this.state.name}
                    {/* Hello everyone, my name is {this.state['name']} */}
                </div>

                <div className="second" >
                    <input value={this.state.country} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My country is {this.state.country}
                </div>

                <div className="third">
                    <button onClick={() => this.handleClickButton()}> Click Me</button>
                </div>

                <ConditionOutput
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;