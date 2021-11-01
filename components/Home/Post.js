import PostsSty from '../../styles/scss/PostsFeed.module.scss'
import { useSession } from 'next-auth/react'
import {DotsHorizontalIcon, PaperAirplaneIcon,ChatIcon, BookmarkIcon, HeartIcon, EmojiHappyIcon} from '@heroicons/react/outline'
const Post = ({index, userName, userImage, postImage, postCaption}) => {
    const {data:session} = useSession();
    return (
        <div key={index} className = {PostsSty.pcInner}>
            <div className= {PostsSty.pcTop}>
                <div className = {PostsSty.pctLeft}>
                    <div className = {PostsSty.pctlImageCon}>
                        <img className = {PostsSty.pcticLogo} src ={userImage} alt="userProfileImage" />
                    </div>
                    <h6 className={PostsSty.pctlTitle}>{userName}</h6>
                </div>
                <DotsHorizontalIcon style ={{
                    width:'20px'
                }}/>
            </div>
            <div className ={PostsSty.pcMiddle}>
                <img className= {PostsSty.pcmImage} src ={postImage} alt="postImage" />
            </div>
            <div className={PostsSty.pcSubMiddle}>
                {session &&
                    <div className = {PostsSty.pcSubMiddleInner}>
                        <div className ={PostsSty.pcsmLeftIcons}>
                            <HeartIcon className = {PostsSty.pcsmliIcons}/>
                            <ChatIcon className = {PostsSty.pcsmliIcons}/>
                            <PaperAirplaneIcon className = {PostsSty.pcsmliIcons}/>
                        </div>
                        <BookmarkIcon className = {PostsSty.pcsmRightIcon}/>
                    </div>
                }
                <div className = {PostsSty.pcSubMiddleSecond}>
                    <p className={PostsSty.pcsubTitle}>{userName}<span className={PostsSty.pcsubTitleInner}>{postCaption}</span></p>
                    <p className={PostsSty.pcComments}><a className={PostsSty.commetnLink} href="#">View all 200 comments</a></p>
                </div>
            </div>
            {session &&
                <div className = {PostsSty.pcCommentField}>
                    <EmojiHappyIcon className={PostsSty.pccfiledEmojyHappy}/>
                    <form className={PostsSty.pccInputField}>
                        <input className={PostsSty.pccinCommentField} type="text" name="comment" placeholder="Add a comment...." />
                    </form>
                </div>
            }
        </div>
    )
}

export default Post
