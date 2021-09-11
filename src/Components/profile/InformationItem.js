const InformationItem = (props) => {

    const { name, Nationality, Address, phoneNumber, Email } = props.info;

    return (
        
        <ul className="profile-list">
            <li className="profile-item">
                <span>Name</span>
                {name}
            </li>
            <li className="profile-item">
                <span>Nationality</span>
                {Nationality}
            </li>
            <li className="profile-item">
                <span>Address</span>
                {Address}
            </li>
            <li className="profile-item">
                <span>Phone</span>
                {phoneNumber}
            </li>
            <li className="profile-item">
                <span>Email</span>
                {Email}
            </li>
        </ul>
        
    )

}


export default InformationItem;

