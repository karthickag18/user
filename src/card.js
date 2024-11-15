

const Card=(props)=>{
    return (
        <div className='karthi'>
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} />
            <h2>{props.name}</h2>
            <h3>{props.city}</h3>
            <p>{props.role}</p>
            <div className="button">
                <button>Message</button>
                <button className="outer">Following</button>
            </div>
            <div className="skill">
                <p>Skills</p>
                <ul>
                    {props.skills.map((skills,index)=>(<li key={index}>{skills}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default Card




