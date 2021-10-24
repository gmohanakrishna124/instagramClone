import MainSty from '../../styles/scss/MainFeed.module.scss'
import InstagramMobileLogo from '../../public/images/instagramMobil.jpg'
import Image from 'next/dist/client/image'
const UserDetail = ()=>{
    return (
        <div className = {MainSty.mcrTop}>
            <div className = {MainSty.mcrtLeft}>
                <div className = {MainSty.mcrtlLeft}>
                    <Image className = {MainSty.mcrtllImage} src={InstagramMobileLogo} layout="fill" />
                </div>
                <div className = "">
                    <h6>shannu_7</h6>
                    <p className = "">Shanmukh Jashwanth</p>
                </div>
            </div>
            <h5><a href="#">switch</a></h5>
        </div>
    )
}

export default UserDetail