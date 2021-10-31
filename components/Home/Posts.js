import {DotsHorizontalIcon, PaperAirplaneIcon,ChatIcon, BookmarkIcon, HeartIcon, EmojiHappyIcon} from '@heroicons/react/outline'
import PostsSty from '../../styles/scss/PostsFeed.module.scss'
import Image from 'next/dist/client/image'
import AmazonLogo from '../../public/images/amazon.jpg'
import Acessories from '../../public/images/acessories.jpg'
import BestRider from '../../public/images/hero.jpg'
import PostProfile from '../../public/images/profile.jpg'
import InstagramLog from '../../public/images/instagramMobil.jpg'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import { onSnapshot,query, collection, orderBy } from '@firebase/firestore'
const Posts = () => {
    const [posts, setPosts] = useState([]);
        
    useEffect(()=>{
       return (
           onSnapshot(query(collection(db,'posts'), orderBy('timestamp','desc')), snapshot =>{
            setPosts(snapshot.docs);
            })
       );  
    },[db]);
    console.log(posts);
    return (
        <div className = {PostsSty.postContainer}>
           {posts.map((post)=>(
            <div key={post.id} className = {PostsSty.pcInner}>
                <div className= {PostsSty.pcTop}>
                    <div className = {PostsSty.pctLeft}>
                        <div className = {PostsSty.pctlImageCon}>
                            <img className = {PostsSty.pcticLogo} src ={post.data().profileImg} alt="postImage" />
                        </div>
                        <h6 className={PostsSty.pctlTitle}>{post.data().username}</h6>
                    </div>
                    <DotsHorizontalIcon style ={{
                        width:'20px'
                    }}/>
                </div>
                <div className ={PostsSty.pcMiddle}>
                    <img className= {PostsSty.pcmImage} src ={post.data().image} alt="profileImage" />
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
                        <p className={PostsSty.pcsubTitle}>{post.data().username}</p>
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
            ))}
        </div>
    )
}

export default Posts
