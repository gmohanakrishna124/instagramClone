import {DotsHorizontalIcon, PaperAirplaneIcon,ChatIcon, BookmarkIcon, HeartIcon, EmojiHappyIcon} from '@heroicons/react/outline'
import PostsSty from '../../styles/scss/PostsFeed.module.scss'
import Image from 'next/dist/client/image'
import AmazonLogo from '../../public/images/amazon.jpg'
import Acessories from '../../public/images/acessories.jpg'
import BestRider from '../../public/images/hero.jpg'
import PostProfile from '../../public/images/profile.jpg'
import InstagramLog from '../../public/images/instagramMobil.jpg'
const Posts = () => {
    return (
        <div className = {PostsSty.postContainer}>
            <div className = {PostsSty.pcInner}>
                <div className= {PostsSty.pcTop}>
                    <div className = {PostsSty.pctLeft}>
                        <div className = {PostsSty.pctlImageCon}>
                            <Image className = {PostsSty.pcticLogo} src ={AmazonLogo} layout="fill" />
                        </div>
                        <h6 className={PostsSty.pctlTitle}>Microsoft</h6>
                    </div>
                    <DotsHorizontalIcon style ={{
                        width:'20px'
                    }}/>
                </div>
                <div className ={PostsSty.pcMiddle}>
                    <Image className= {PostsSty.pcmImage} src = {Acessories} layout="fill" />
                </div>
                <div className={PostsSty.pcSubMiddle}>
                    <div className = {PostsSty.pcSubMiddleInner}>
                        <div className ={PostsSty.pcsmLeftIcons}>
                            <HeartIcon className = {PostsSty.pcsmliIcons}/>
                            <ChatIcon className = {PostsSty.pcsmliIcons}/>
                            <PaperAirplaneIcon className = {PostsSty.pcsmliIcons}/>
                        </div>
                        <BookmarkIcon className = {PostsSty.pcsmRightIcon}/>
                    </div>
                    <div className = {PostsSty.pcSubMiddleSecond}>
                        <p className={PostsSty.pcsubTitle}>Microsoft's<span className={PostsSty.pcsubTitleInner}>It’s a frightfully good surprise.</span></p>
                        <p className={PostsSty.pcComments}><a className={PostsSty.commetnLink} href="#">View all 200 comments</a></p>
                    </div>
                </div>
                <div className = {PostsSty.pcCommentField}>
                    <EmojiHappyIcon className={PostsSty.pccfiledEmojyHappy}/>
                    <form className={PostsSty.pccInputField}>
                        <input className={PostsSty.pccinCommentField} type="text" name="comment" placeholder="Add a comment...." />
                    </form>
                </div>
            </div>

            <div className = {PostsSty.pcInner}>
                <div className= {PostsSty.pcTop}>
                    <div className = {PostsSty.pctLeft}>
                        <div className = {PostsSty.pctlImageCon}>
                            <Image className = {PostsSty.pcticLogo} src ={InstagramLog} layout="fill" />
                        </div>
                        <h6 className={PostsSty.pctlTitle}>Microsoft</h6>
                    </div>
                    <DotsHorizontalIcon style ={{
                        width:'20px'
                    }}/>
                </div>
                <div className ={PostsSty.pcMiddle}>
                    <Image className= {PostsSty.pcmImage} src = {PostProfile} layout="fill" />
                </div>
                <div className = {PostsSty.pcSubMiddle}>
                    <div className = {PostsSty.pcSubMiddleInner}>
                        <div className ={PostsSty.pcsmLeftIcons}>
                            <HeartIcon className = {PostsSty.pcsmliIcons}/>
                            <ChatIcon className = {PostsSty.pcsmliIcons}/>
                            <PaperAirplaneIcon className = {PostsSty.pcsmliIcons}/>
                        </div>
                        <BookmarkIcon className = {PostsSty.pcsmRightIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
