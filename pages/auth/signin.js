import {getProviders, signIn as SignInToProviders } from 'next-auth/react';
function signIn({providers}) {
    console.log(providers)
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignInToProviders(provider.id, {callbackUrl:'/'})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
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
