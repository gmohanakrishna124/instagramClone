import UsSuggeSty from '../../styles/scss/UserSuggestions.module.scss'
import { useState,useEffect } from 'react'
import faker from 'faker'
import UserSuggestion  from './UserSuggestion'
const UserSuggestions = () => {
    const [suggestionDetails, setSuggestionDetails] = useState([]);
    useEffect(()=>{
        const suggestionDetails = [...Array(5)].map((_,index)=>{
            return(
                {
                    ...faker.helpers.contextualCard(),
                    id:index,
                }
            )
        })

        setSuggestionDetails(suggestionDetails)
    },[])
    return (
        <div className = {UsSuggeSty.uSContainer}>
            <div className = "">
                <h5 className = "">Suggestions for you</h5>
                <p className = ""><a href="#">See All</a></p>
            </div>
            <div className = "">
                {suggestionDetails.map(({id,username,avatar,company})=>(
                    <UserSuggestion 
                        id = {id}
                        profileName = {username}
                        profileImage = {avatar}
                        description  = {company}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserSuggestions

