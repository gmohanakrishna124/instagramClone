import PostsSty from '../../styles/scss/PostsFeed.module.scss'
import { useState,useEffect } from 'react'
import {db} from '../../firebase'
import { useSession} from 'next-auth/react'
import { onSnapshot,query, collection, orderBy } from '@firebase/firestore'
import Post from './Post'
const dummyData = [
    {
        id: 1,
        uName:'microsoftlife',
        uImage:  'AmazonLogo',
        pImage :'',
        pCaption:'👻 Ghost and ghouls float and whiz, who knows where this Microsoft campus is? 👻'
    },
    {
        id:2,
        uName:'intel',
        uImage:'',
        pImage:'',
        pCaption:' powers through with long-lasting battery life so you can work your way. '
    }
]

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const {data:session} = useSession();
    useEffect(()=>
        onSnapshot(query(collection(db,'posts'), orderBy('timestamp','desc')), snapshot =>{
            setPosts(snapshot.docs);
        }), 
    [db]);
    return (
        <div className = {PostsSty.postContainer}>
           {posts.map( post => (
                <Post 
                    id = {post.id}
                    userName = {post.data().username}
                    userImage = {post.data().profileImg}
                    postImage = {post.data().image}
                    postCaption= {post.data().caption}
                />
            ))}
        </div>
    )
}

export default Posts
