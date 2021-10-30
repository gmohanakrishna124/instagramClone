const UserSuggestion = ({id, profileName, profileImage, description}) => {
    return (
        <div index={id} className="">
            <div className="">
                <div className="">
                    <img src={profileImage} alt="profileImages" />
                </div>
                <div className="">
                    <h6 className="">{profileName}</h6>
                    <p className="">{description}</p>
                </div>
            </div>
            <p ><a href="#">Follow</a></p>
        </div>
    )
}

export default UserSuggestion
