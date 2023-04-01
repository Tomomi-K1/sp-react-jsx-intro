const Tweet = (props) => {
    return (
        <ul>
            <li>username: {props.username}</li>
            <li>name: {props.name}</li>
            <li>date of tweet: {props.date}</li>
            <li>tweet message: {props.message}</li>
        </ul>
    )
}

