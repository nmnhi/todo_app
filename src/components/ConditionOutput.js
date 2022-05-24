import React from "react";


class ConditionOutput extends React.Component {

    state = {
        showJobs: false
    }
    
    handleShowHide = (status) => {
        this.setState({
                showJobs: !this.state.showJobs
            })
    }

    handleOnclickDelete = (job) =>{
        console.log(">>>Handle click me: ", job)
        this.props.deleteAJob(job);
        
        // alert("Delete Sucess!!!")
    }


    render() {

        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? "showJobs = True" : "showJobs = false";
        console.log(">>> Check condition: ", check)


        return(
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()} >Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                        {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                        <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                    </div>
                                )
                            }
                            
                            )
                        } 
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                        
                    </>
                }
            </>

        )
        
    }
  }

export default ConditionOutput;