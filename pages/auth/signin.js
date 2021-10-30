import {getProviders, signIn as SignInToProviders } from 'next-auth/react';
import SignInButton from '../../components/auth/SignInButton';
import SignSty from '../../styles/scss/Sign.module.scss'
function signIn({providers}) {
    console.log(providers)
    return (
        <div className = {SignSty.signContainer}>
            <div className={SignSty.scInner}>
                <div className={SignSty.sciLeft}>
                    <img className={SignSty.scilImagee} src ="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" alt="main" />
                    <div className={SignSty.sciliInner}>
                        <img className={SignSty.sciliInnerImage} src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" alt="slider" />
                    </div>
                </div>
                <div className={SignSty.sciRight}>
                    <div className={SignSty.scirTop}>
                        <h1 className={SignSty.scirtTitle}>Instagram</h1>
                        <h6 className={SignSty.scirtContnet}>Sign up to see photos and videos from your friends.</h6>
                        <div className ={SignSty.scirtbutton}>

                            {Object.values(providers).map((provider) => (
                                <div className={SignSty.scirtbInner} key={provider.name}>
                                    <SignInButton 
                                        providerId = {provider.id}
                                        providerName = {provider.name}
                                        backgroundColor = ""
                                        color = "'"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={SignSty.scirBottom}>
                        <p className={SignSty.scirbTitle}>Get The App</p>
                        <div className={SignSty.scirbAppLinks}>
                            <div className={SignSty.scirbalLeft}>
                                <img className={SignSty.scirballImage} src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="appStore" />
                            </div>
                            <div className={SignSty.scirbalLeft}>
                                <img className={SignSty.scirballImage} src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="googlePlay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers,
        }
    }
}

export default signIn
