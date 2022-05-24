import React from "react";



class ChildComponent extends React.Component {
    
    handleSubmit = (event) =>{
        event.preventDefault()
        alert("Submit Success!!!")
        console.log(">>> Check data input:", this.state)
    }


    render() {
        let {name, age, address} = this.props;
        return (
            <>
                <div>Child components name: {name}</div>
                <div>Age: {age}</div>
                <div>Address: {address}</div>
            </>
      )

        
    }
  }
export default ChildComponent;