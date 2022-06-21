import React from "react";
import ConditionOutput from "./ConditionOutput";
import AddForm from '../components/AddFrom';



class NewMyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: "Engineer", title: "Developer", salary: "500" },
            { id: "Senior Engineer", title: "Tester", salary: "400" },
            { id: "Director", title: "PM", salary: "1000" }
        ]
    }

    addNewJob = (job) => {
        // basic method
        // let current = this.state.arrJobs;
        // current.push(job)
        // this.setState({
        //     arrJobs: current
        // })

        // console.log("Check output", job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    // Lifecycle
    componentDidMount() {
        console.log(">>> Run component did mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">>> Run did update:", "prev state: ", prevState, "Current state: ", this.state)
    }


    render() {
        console.log(">>> Call render: ", this.state)
        return (
            <>
                <AddForm
                    addNewJobs={this.addNewJob}
                />
                <ConditionOutput
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )

    }
}

export default NewMyComponent;