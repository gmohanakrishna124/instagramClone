import MainSty from '../../styles/scss/MainFeed.module.scss'
import Stories from './Stories'
import Posts from './Posts'
import UserDetail from './UserDetail'
import UserSuggestions from './UserSuggestions'
const MainFeed = () => {
    return (
        <div className = {MainSty.mainContainer}>
           <div className = {MainSty.mcLeft}>
                <Stories />
                <Posts />
           </div>
           <div className = {MainSty.mcRight}>
                <div className = {MainSty.mcRightInner}>
                    <UserDetail />
                </div>
           </div> 
        </div>
    )
}

export default MainFeed
