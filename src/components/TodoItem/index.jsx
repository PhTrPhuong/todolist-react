import React from "react";
import Button from "../Button";
import Form from "../Form";

const TodoItem = ({
    todo,
    handleDeleteTodo,
    handleDoneTodo,
    handleEditMode,
    handleEditTodo,
    ...restProps
}) => {
    const { id, label, isDone, isEditting } = todo || {};
    return (
        <li className={`todo-item ${isDone ? "done" : ""}`} {...restProps}>
            {isEditting ? (
                <Form
                    btnText="Save"
                    value={label}
                    handleSubmit={(editedLabel) =>
                        handleEditTodo?.(id, editedLabel)
                    }
                />
            ) : (
                <>
                    <span className="todo-label">{label || ""}</span>
                    <div className="todo-action">
                        <Button
                            className="btn-delete"
                            onClick={() => handleDeleteTodo?.(id)}
                        >
                            Delete
                        </Button>
                        {!isDone && (
                            <Button
                                className="btn-edit"
                                onClick={() => handleEditMode?.(id)}
                            >
                                Edit
                            </Button>
                        )}
                        <Button
                            className="btn-done"
                            onClick={() => handleDoneTodo?.(id)}
                        >
                            {isDone ? "UnDone" : "Done"}
                        </Button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
