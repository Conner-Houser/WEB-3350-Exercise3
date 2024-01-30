import HobbyItem from "./HobbyItem";
import "./Hobbies.css"

function Hobbies(props) {

    return (
        <div>
            {props.items.map(hobby => (
            <HobbyItem 
                key={hobby.id}
                title={hobby.title} 
                description={hobby.description}
            />))}

        </div>
    )
}

export default Hobbies;