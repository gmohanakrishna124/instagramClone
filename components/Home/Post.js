import PostsSty from '../../styles/scss/PostsFeed.module.scss'
import { useSession } from 'next-auth/react'
import {DotsHorizontalIcon, PaperAirplaneIcon,ChatIcon, BookmarkIcon, HeartIcon, EmojiHappyIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import {db} from '../../firebase'
import {addDoc, collection, query, onSnapshot,  orderBy,  serverTimestamp, setDoc, doc, deleteDoc} from '@firebase/firestore';
import Moment from 'react-moment'
const Post = ({id, userName, userImage, postImage, postCaption}) => {
    const {data:session} = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [latestComment, setLatestComment] = useState([]);
    const [commentModal, setCommentModal] = useState(false);

    useEffect(()=> 
        onSnapshot(query(collection(db,'posts',id,'comments'),orderBy('timestamp','desc')), snapshot => {
            setComments(snapshot.docs);
        }),
    [db,id]);
    
    useEffect(()=>{
        setLatestComment(comments);
    },[comments])
    useEffect(()=>
        onSnapshot(collection(db,'posts',id,"likes"),(snapshot)=>
            setLikes(snapshot.docs)
        ),
    [db,id]);

    useEffect(() =>
        setHasLiked(
            likes.findIndex((like)=> like.id === session?.user?.uid) !== -1
        ), 
    [likes]);

    const likePost = async ()=>{
        if(hasLiked){
            await deleteDoc(doc(db,'posts',id,'likes',session.user.uid))
        }else{
            await setDoc(doc(db, 'posts',id, 'likes', session.user.uid),{
                username: session.user.username
            });
        }
    }
    const sendComment = async (e)=> {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    };

    return (
        <div key={id} className = {PostsSty.pcInner}>
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
                            {hasLiked ?(
                                <HeartIcon onClick={likePost} className={PostsSty.pcsmliIcons} style={{fill:'red',color:'red',cursor:'pointer'}}/>
                            ):(
                                <HeartIcon onClick={likePost} className = {PostsSty.pcsmliIcons}/>
                            )}
                            <ChatIcon className = {PostsSty.pcsmliIcons}/>
                            <PaperAirplaneIcon className = {PostsSty.pcsmliIcons}/>
                        </div>
                        <BookmarkIcon className = {PostsSty.pcsmRightIcon}/>
                    </div>
                }

                {likes.length >0 && (
                    <p>{likes.length} Likes</p>
                )}
                
                <div className = {PostsSty.pcSubMiddleSecond}>
                    <p className={PostsSty.pcsubTitle}>{userName}<span className={PostsSty.pcsubTitleInner}>{postCaption}</span></p>
                    <p className={PostsSty.pcComments}><a className={PostsSty.commetnLink} onClick={()=> setCommentModal(true)} href="#">View all {comments.length} comments</a></p>
                </div>
                
                {commentModal && (
                    <div className={PostsSty.pccField}>
                        <div className={PostsSty.pccTop}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  fill="white" viewBox="0 0 24 24" stroke="currentColor" className={PostsSty.pcctSvg} onClick={()=> setCommentModal(false)}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className={PostsSty.pccfInner}>
                            <div className={PostsSty.pccfiTop}>
                                <div className={PostsSty.pccfitLogoContainer}>
                                    <img className={PostsSty.pccfitLogo} src={userImage} alt='user image' />
                                </div>
                                <h6 className={PostsSty.pccfitTitle}>{userName}</h6>
                                <DotsHorizontalIcon style ={{
                                    width:'20px'
                                }}/>
                            </div>
                            <div className={PostsSty.pccfiMiddle}>
                                <img className={PostsSty.pccfmImage} src={postImage} alt="post image" />
                            </div>
                            <div className={PostsSty.pccfBottom}>
                                {comments.length > 0  && (
                                    <div style={{
                                        display:'flex',
                                        flexDirection:'column',
                                        justifyContent:'flex-start',
                                        alignItems:'flex-start',
                                        padding:'.5rem 1rem',
                                        width:'100%',
                                         height:'30vh',
                                        overflowY:'scroll'
                                    }}>
                                        {comments.map((comment)=>(
                                            <div key= {comment.id} style={{
                                                display:'flex',
                                                justifyContent:'space-between',
                                                alignItems:'center',
                                                margin:'.4rem 0',
                                                width:'100%',
                                            }}>
                                                <div style={{
                                                    display:'flex',
                                                    justifyContent:'flex-start',
                                                    alignItems:'center'
                                                }}>
                                                    <div style={{
                                                        width:'2.4rem',
                                                        height:'2.4rem',
                                                        position:'relative',
                                                        marginRight:'.9rem'
                                                    }}>
                                                        <img style={{
                                                            width:'100%',
                                                            height:'100%',
                                                            borderRadius:'50px',
                                        
                                                        }} src={comment.data().userImage} alt="image" />
                                                    </div>
                                                    <p style={{
                                                        fontSize:'.92rem',
                                                        fontWeight:'600',
                                                    }}>{comment.data().username}<span style={{
                                                        fontSize:'.88rem',
                                                        fontWeight:'400',
                                                        paddingLeft:'.6rem'
                                                    }}>{comment.data().comment}</span></p>
                                                </div>
                                                <Moment fromNow>
                                                    {comment.data().timestamp?.toDate()}
                                                </Moment>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {session && (
                                    <div className = {PostsSty.pccfLowestBottom}>
                                        <EmojiHappyIcon className={PostsSty.pccflbEmojyHappy}/>
                                        <form className={PostsSty.pccflbInputFiled}>
                                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className={PostsSty.pccflcommentFiled}  placeholder="Add a comment...." />
                                        </form>
                                        <button 
                                            type="submit"
                                            disabled={!comment.trim()}
                                            onClick={sendComment}
                                            style={{
                                                posititon:'absolute',
                                                top:'0',
                                                right:'0',
                                                zIndex:'1000'
                                            }}
                                        >Post</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}  
            </div>

            {session && (
                <div className = {PostsSty.pcCommentField}>
                    <EmojiHappyIcon className={PostsSty.pccfiledEmojyHappy}/>
                    <form className={PostsSty.pccInputField}>
                        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className={PostsSty.pccinCommentField}  placeholder="Add a comment...." />
                    </form>
                    <button 
                        type="submit"
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        style={{
                            posititon:'absolute',
                            top:'0',
                            right:'0',
                            zIndex:'1000'
                        }}
                    >Post</button>
                </div>
            )}
        </div>
    )
}

export default Post
