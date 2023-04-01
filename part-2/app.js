const App = () => {
    return (
        <div>
            <Tweet 
                username="tom" 
                name="Tomomi" 
                date={new Date().toDateString()} 
                message="hello this is first tweet" 
            />
            <Tweet 
                username="tar" 
                name="Taro" 
                date={new Date().toDateString()} 
                message="hello ====!" 
                />
            <Tweet 
                username="kim" 
                name="Kim" 
                date={new Date().toDateString()} 
                message="hey hey" 
                />
        </div>
    );
}
