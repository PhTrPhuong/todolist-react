import { useState } from "react";
import Button from "../Button";

const Form = ({
    btnText = "Submit",
    handleSubmit,
    value = "",
    ...restProps
}) => {
    const [input, setInput] = useState(value);

    const _onInputChange = (event) => {
        const value = event?.target.value || "";
        setInput(value);
    };

    const _onSubmit = (event) => {
        event.preventDefault();
        handleSubmit?.(input);
        // console.log(input);
        setInput("");
    };

    return (
        <form className="form" onSubmit={_onSubmit}>
            <input
                type="text"
                className="input"
                autoComplete="off"
                onChange={_onInputChange}
                value={input}
                {...restProps}
            />
            <Button className="btn">{btnText}</Button>
        </form>
    );
};

export default Form;
