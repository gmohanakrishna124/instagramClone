import HomeNav from '../../styles/scss/Navbar.module.scss'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'
import {useSession,signOut, signIn} from 'next-auth/react'
import {useRecoilState} from 'recoil'
import {modalState} from '../../atoms/modalAtoms'
import InstagramName from '../../public/images/instagramName.png'
import {HomeIcon} from '@heroicons/react/solid'
import { LogoutIcon,PlusCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
const Header = () => {
    const router = useRouter();
    const {data : session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    return (
        <div className = {HomeNav.navContainer} style={{boxShadow:'0 8px 19px rgb(245,245,245)'}}>
            <div className={HomeNav.ncInnner}>
                <div className={HomeNav.ncLeft}>
                    <img className={HomeNav.nclImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" alt="instagram name Logo" />
                </div>
                <div className={HomeNav.ncMiddle}>
                    <input className={HomeNav.ncmInput} type="text" name="search" placeholder="search" />
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" className={HomeNav.searchLogo}>
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                {session ? (
                    <div className={HomeNav.ncRight}>
                        <HomeIcon className={HomeNav.homeIcon} />
                        <PlusCircleIcon className={HomeNav.homeIcon} onClick = {() => setOpen(true)}/>
                        <LogoutIcon className={HomeNav.homeIcon} onClick = {signOut}/>
                        <div className={HomeNav.userImage}>
                            <img className={HomeNav.image} src={session.user.image} alt="" />
                        </div>
                    </div>
                ):(
                    <div className={HomeNav.ncRight}>
                        <HomeIcon className={HomeNav.homeIcon} />
                        <p style={{color:'blue',fontSize:'.82rem',cursor:'pointer'}} onClick= {()=> router.push('/auth/signin')}>Sign In</p>
                    </div>
                )
                }
                
            </div>
        </div>
    )
}

export default Header
