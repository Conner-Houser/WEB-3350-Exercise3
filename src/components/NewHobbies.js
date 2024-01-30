import './NewHobbies.css'
import HobbyForm from './HobbyForm';
import { useState } from 'react';

const NewHobbies = (props) => {

    const [isEditing, setIsEditing] = useState(false);



    const saveHobbyDataHandler = (enteredHobby) => {
        const hobbyData = {
            ...enteredHobby,
            id: Math.random().toString()
        };
        props.onAddHobby(hobbyData);
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return <div className='new-hobby'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Hobby</button>}
        {isEditing && 
            <HobbyForm 
                onSaveHobbyData={saveHobbyDataHandler}
                onCancel={stopEditingHandler}
            />}
    </div>
}

export default NewHobbies;

