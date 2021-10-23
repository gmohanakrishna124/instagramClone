import HomeNav from '../../styles/scss/Navbar.module.scss'
import Instagram from '../../public/images/instagram.png'
import InstagramLogo from '../../public/images/instagramMobil.jpg'
import ExploreImage from '../../public/images/explore.jpg'
import UserProfile from '../../public/images/profile.jpg'
import Image from 'next/dist/client/image'
import {SearchIcon, PaperAirplaneIcon, HeartIcon,PlusCircleIcon} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'
const Header = () => {
    return (
        <div className = {HomeNav.navContainer}>
            <div className={HomeNav.ncInner}>
                <div className= {HomeNav.nciLogoContainer}>
                    <Image className = {HomeNav.ncilcLogo} src ={Instagram} layout="fill" />
                </div>
                <div className = {HomeNav.nciSearch}>
                    <input className= {HomeNav.ncisInput} type="search" name="search" placeholder="Search" />
                    <SearchIcon  style = {{
                        position: 'absolute',
                        top: '1',
                        left: '4',
                        bottom : '15',
                        width: '9%',
                        height: '100%',
    
                    }}/>
                </div>
                <div className = {HomeNav.nciIcons}>
                    <HomeIcon className= {HomeNav.nciIconss}/>
                    <div style = {{
                        position: 'relative',
                        width:'9%'
                    }}>
                        <PaperAirplaneIcon  style = {{
                            transform: 'rotate(65deg)',
                            width:'100%',
                            cursor:'pointer',
                            border:'none',
                            outline:'none',
                            strokeWidth: '.01px',
                            position: 'relative',
                            strok :'rgba(0,0,0,0.7)'
                        }}/>
                        <p sytle = {{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            fontSize: '.9rem',
                            backgroundColor: 'red',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px'
                        }}>6</p>
                    </div>
                    <PlusCircleIcon className = {HomeNav.nciIconss } />
                    <div className= {HomeNav.nciExoplore}>
                        <Image className = {HomeNav.ncieLogo} src = {ExploreImage} layout="fill"/>
                    </div>
                    <HeartIcon className = {HomeNav.nciIconss} />
                    <div className  = {HomeNav.nciUserLogo}>
                        <Image className = {HomeNav.nciUsers} src = {UserProfile} layout="fill"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
