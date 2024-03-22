import { useState } from "react";
import Form from "../Form";
import TodoItem from "../TodoItem";
import Button from "../Button";

const TodoContainer = () => {
    // const todos = [
    //     {
    //         id: 1701098599234,
    //         label: "Task 1",
    //         isDone: false,
    //         isEditting: false,
    //     },
    //     {
    //         id: 1701098599254,
    //         label: "Task 2",
    //         isDone: true,
    //         isEditting: false,
    //     },
    //     {
    //         id: 1701098603079,
    //         label: "Task 3",
    //         isDone: false,
    //         isEditting: true,
    //     },
    // ];

    const [todos, setTodos] = useState([]);
    console.log("todos", todos);

    const handleAddTodo = (newLabel) => {
        if (newLabel) {
            const newTodo = {
                id: Date.now(),
                label: newLabel || "",
                isDone: false,
                isEditting: false,
            };

            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            // setTodos((prevTodos) => [newTodo, ...prevTodos]);
        } else {
            alert("Please enter your todo!");
        }
    };

    const handleDeleteTodo = (deletedId) => {
        if (deletedId) {
            const todo = todos.filter((item) => item.id !== deletedId);
            setTodos(todo);
        }
        // setTodos((prevTodos) =>
        //     prevTodos.filter((todo) => todo.id !== deletedId)
        // );
    };

    const handleDoneTodo = (doneId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === doneId
                    ? { ...todo, isDone: !todo.isDone }
                    : todo;
            })
        );
    };

    const handleEditMode = (editedId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === editedId
                    ? { ...todo, isEditting: true }
                    : todo;
            })
        );
    };

    const handleEditTodo = (editedId, edittedLabel) => {
        console.log(editedId, edittedLabel);
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === editedId
                    ? { ...todo, label: edittedLabel, isEditting: false }
                    : todo;
            })
        );
    };

    const TodoItemActionsProps = {
        handleDeleteTodo,
        handleDoneTodo,
        handleEditMode,
        handleEditTodo,
    };

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <Form
                btnText="Add"
                placeholder="Nhập nội dung..."
                handleSubmit={handleAddTodo}
            />

            <ul className="todo-list" id="todoList">
                {todos.map((todo, index) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id || index}
                            {...TodoItemActionsProps}
                        />
                    );

                    {
                        /* const { id, label, isDone, isEditting } = todo || {};
                    return (
                        <li
                            className={`todo-item ${isDone ? "done" : ""}`}
                            id={id}
                            key={id}
                        >
                            {isEditting ? (
                                <Form value={label} btnText="Save" />
                            ) : (
                                <>
                                    <span className="todo-label">{label || ""}</span>
                                    <div className="todo-action">
                                        <Button className="btn-delete">Delete</Button>
                                        {!isDone && (
                                            <Button className="btn-edit">Edit</Button>
                                        )}
                                        <Button className="btn-done">
                                            {isDone ? "UnDone" : "Done"}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </li>
                    ); */
                    }
                })}

                {/* <li className="todo-item " id={1701777676318}>
                    <span className="todo-label">Task 3</span>
                    <div className="todo-action">
                        <button className="btn btn-delete">Delete</button>
                        <button className="btn btn-edit">Edit</button>
                        <button className="btn btn-done">Done</button>
                    </div>
                </li>
                <li className="todo-item done" id={1701777673291}>
                    <span className="todo-label">Task 2</span>
                    <div className="todo-action">
                        <button className="btn btn-delete">Delete</button>
                        <button className="btn btn-done">Undone</button>
                    </div>
                </li>
                <li className="todo-item " id={1701777670166}>
                    <form className="form editForm">
                        <input className="input editInput" />
                        <button className="btn">Save</button>
                    </form>
                </li> */}
            </ul>
        </div>
    );
};

export default TodoContainer;
