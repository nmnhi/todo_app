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
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Add title succes!!!")
    }

    handleDelteTodo = (todo) => {
        let currentTodo = this.state.listToDos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentTodo
        })
        toast.success("Delete succes!!!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        // Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listToDos];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listToDos: listTodoCopy,
                editTodo: ""
            })
            toast.success("Update succes!!!")
            return;
        }
        this.setState({
            editTodo: todo
        })
    }


    handleOnchangeEditTodos = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }



    render() {
        let { listToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0


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
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodos(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }

                                    </button>

                                    <button className="delete"
                                        onClick={() => this.handleDelteTodo(item)}
                                    >Delete</button>
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