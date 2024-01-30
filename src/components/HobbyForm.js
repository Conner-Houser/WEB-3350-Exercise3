import "./HobbyForm.css"
import { useState } from "react";

const HobbyForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredDescription(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const hobbyData = {
            title: enteredTitle,
            description: enteredDescription,
        };

        if (enteredTitle.trim().length === 0) {
            setIsValid(false)
            return;
        }

        if (enteredDescription.trim().length === 0) {
            setIsValid(false)
            return;
        }

        props.onSaveHobbyData(hobbyData);

        setEnteredTitle('')
        setEnteredDescription('')
    }


    return (
    <form onSubmit={submitHandler}>
        <div className="new-hobby__control">
            <div className="new-hobby__control">
                <label style={{color: !isValid ? "red" : "black"}}>Title</label>

                <input style={{borderColor: !isValid ? "red" : "black"}}
                type="text" 
                value={enteredTitle} 
                onChange={titleChangeHandler}
                />
            </div>
            <div className="new-hobby__control">
                <label style={{color: !isValid ? "red" : "black"}}>Description</label>

                <input style={{borderColor: !isValid ? "red" : "black"}}
                type="text" 
                value={enteredDescription} 
                onChange={descriptionChangeHandler}
                />
            </div>
        </div>
        <div className="buttons">
            <button type="button" onClick={props.onCancel}>
                Cancel
            </button>
            <button type="submit">Add Hobby</button>
        </div>
    </form>
)};


export default HobbyForm;