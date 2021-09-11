const SkillsItem = (props) => {
    const { title, value } = props.skills;

    return (
        
            <div className="skill-box"> 
            <h4 className="skill-title"> {title} </h4> 
            <div className="progress-line"> 
                <span style={{width: `${value}%` }}>
                    <span className="percent-tooltip"> {value}% </span>
                </span> 
                </div>
            </div>
        
    )

}


export default SkillsItem;