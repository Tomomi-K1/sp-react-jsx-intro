const Person = (props) => {
    let message = props.ages > 18? "please go vote!" : "you must be 18";

    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age:{props.age}</li>
                <ul>Hobbies:
                    {props.hobbies.map(hobby=><li>{hobby}</li>)}
                </ul>
                    
            </ul>
            <h3>{message}</h3>
        </div>

    );
}

