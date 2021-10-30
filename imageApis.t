instagram-name-image = "https://links.papareact.com/ocw"
instagram-logo = "https://links.papareact.com/jjm"
callbackUrl = "https://instagram-clone-ef301.firebaseapp.com/__/auth/handler"
bearerToker=AAAAAAAAAAAAAAAAAAAAAO0JVQEAAAAAueXNaH4PVRFGD2O03a%2Bp1aq264s%3DMka80slAgFu8nehBp3IePC2QypAJKD22j3je9w8uwiQs8KC1h2
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