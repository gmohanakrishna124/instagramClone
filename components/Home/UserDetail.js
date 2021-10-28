import MainSty from '../../styles/scss/MainFeed.module.scss'
import InstagramMobileLogo from '../../public/images/instagramMobil.jpg'
import Image from 'next/dist/client/image'
import {signOut, useSession} from 'next-auth/react'
const UserDetail = ()=>{
    const {data : session} = useSession();
    return (
        <div className = {MainSty.mcrTop}>
            <div className = {MainSty.mcrtLeft}>
                <div className = {MainSty.mcrtlLeft}>
                    <img className = {MainSty.mcrtllImage} src={session?.user?.image}  />
                </div>
                <div className = "">
                    <h6>{session?.user?.username}</h6>
                    <p className = "">{session?.user?.name}</p>
                </div>
            </div>
            <h5><a onClick = {signOut} href="#">switch</a></h5>
        </div>
    )
}

export default UserDetail