import React from "react";
import "./ListToDo.scss";
import AddToDo from "./AddToDo";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

class ListToDo extends React.Component {

    state = {
        listToDos: [
            { id: "todo1", title: "Doing home work" },
            { id: "todo2", title: "Making video" },
            { id: "todo3", title: "Fixing bugs" }
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Add title succes!!!")
    }
    render() {
        let { listToDos } = this.state;

        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        )

    }
}

export default ListToDo;