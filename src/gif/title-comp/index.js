const Title = (props)=>{
    return(
        <div>
            <img src={props.url} alt="gif"></img>
            <h1>{props.title}</h1>
        </div>
    )
};

export default Title;