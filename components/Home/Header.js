import HomeNav from '../../styles/scss/Navbar.module.scss'
import Instagram from '../../public/images/instagram.png'
import InstagramLogo from '../../public/images/instagramMobil.jpg'
import ExploreImage from '../../public/images/explore.jpg'
import UserProfile from '../../public/images/profile.jpg'
import Image from 'next/dist/client/image'
import {SearchIcon, PaperAirplaneIcon, HeartIcon,PlusCircleIcon} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'
import {useSession,signOut} from 'next-auth/react'
import {useRecoilState} from 'recoil'
import {modalState} from '../../atoms/modalAtoms'
const Header = () => {
    const {data : session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    console.log(session)
    return (
        <div className = {HomeNav.navContainer}>
            <div className={HomeNav.ncInner}>
                <h3 style={{
                    fontSize:'1.8rem',
                    fontWeight:'550',
                    color:'black',
                }}>Instagram</h3>
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
                        
                    </div>
                    <PlusCircleIcon onClick = {() => setOpen(true)} className = {HomeNav.nciIconss } />
                    <div className= {HomeNav.nciExoplore}>
                        <Image className = {HomeNav.ncieLogo} src = {ExploreImage} layout="fill"/>
                    </div>
                    <HeartIcon className = {HomeNav.nciIconss} />
                    <div className  = {HomeNav.nciUserLogo}>
                        <img onClick = {signOut} className = {HomeNav.nciUsers} src = {session?.user?.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
