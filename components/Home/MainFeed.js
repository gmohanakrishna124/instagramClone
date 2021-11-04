import MainSty from '../../styles/scss/MainFeed.module.scss'
import Stories from './Stories'
import Posts from './Posts'
import UserDetail from './UserDetail'
import { useSession } from 'next-auth/react'
import UserSuggestions from './UserSuggestions'
const MainFeed = () => {
    const {data: session} = useSession();
    return (
        <div className = {MainSty.mainContainer}>
           <div className = {MainSty.mcLeft}>
                <Stories />
                <Posts />
           </div>
           <div className = {MainSty.mcRight}>
           {session && (
                <div className = {MainSty.mcRightInner}>
                    <UserDetail />
                    <UserSuggestions />
                </div>
           )}
           </div> 
        </div>
    )
}

export default MainFeed
