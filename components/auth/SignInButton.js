import { signIn as SignInToProviders } from 'next-auth/react';
import SignSty from '../../styles/scss/Sign.module.scss'
const SignInButton = ({providerId, providerName})=>{
    return(
        <button className={SignSty.scirtbiButton} type="button" onClick = {()=> SignInToProviders(providerId, {callbackUrl:'/'})}>
            Sign in with {providerName}
        </button>
    )
}

export default SignInButton