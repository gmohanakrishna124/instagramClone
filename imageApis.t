instagram-name-image = "https://links.papareact.com/ocw"
instagram-logo = "https://links.papareact.com/jjm"
callbackUrl = "https://instagram-clone-ef301.firebaseapp.com/__/auth/handler"
<div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <SignInButton 
                        providerId = {provider.id}
                        providerName = {provider.name}
                        backgroundColor = ""
                        color = "'"
                    />
                </div>
            ))}
        </div>