import "../components/HobbyItem.css"

function HobbyItem(props) {

    return (
        <div className="hobby-item">
            <div>{props.title}</div>
            <div>{props.description}</div>
        </div>
    );

}

export default HobbyItem;