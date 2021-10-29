import { signIn as SignInToProviders } from 'next-auth/react';
const SignInButton = ({providerId, providerName})=>{
    return(
        <button type="button" onClick = {()=> SignInToProviders(providerId, {callbackUrl:'/'})}>
            Sign in with {providerName}
        </button>
    )
}

export default SignInButton