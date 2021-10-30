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
            <div className = {UsSuggeSty.uscTop}>
                <h5 className = {UsSuggeSty.usctTitle}>Suggestions for you</h5>
                <p className = {UsSuggeSty.usctLink}><a className={UsSuggeSty.usctlInner} href="#">See All</a></p>
            </div>
            <div className = {UsSuggeSty.uscBottom}>
                {suggestionDetails.map(({id,username,avatar,company})=>(
                     <div index={id} className={UsSuggeSty.uscbInner}>
                        <div className={UsSuggeSty.uscbiLeft}>
                            <div className={UsSuggeSty.uscbilAvatarContainer}>
                                <img className={UsSuggeSty.uscbilAvatar} src={avatar} alt="profileImages" />
                            </div>
                            <h6 className={UsSuggeSty.uscbilTitle}>{username}</h6>
                        </div>
                         <p ><a style={{
                             textDecoration:'none',
                             fontSize:'.91rem',
                             color:'#0095F6',
                         }} href="#">Follow</a></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserSuggestions

