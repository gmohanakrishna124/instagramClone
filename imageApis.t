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

<div className= {HomeNav.nciLogoContainer}>
                    <img className = {HomeNav.ncilcLogo} src ="https://th.bing.com/th/id/R.2580ed352090d47b1a01b644423b48fd?rik=c4%2fQlohtbcjWcg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fInstagram-Logo-PNG-Free-Download.png&ehk=0IXSn1hA7SRgFYVs5xeZyWLe9pLQPaLzMtyP7X%2fCiA8%3d&risl=&pid=ImgRaw&r=0" alt="instagramLogo"/>
                </div>


<PlusCircleIcon onClick = {() => setOpen(true)} className = {HomeNav.nciIconss } />
                    <div className= {HomeNav.nciExoplore}>
                        <Image className = {HomeNav.ncieLogo} src = {ExploreImage} layout="fill"/>
                    </div>
                    <HeartIcon className = {HomeNav.nciIconss} />
                    <div className  = {HomeNav.nciUserLogo}>
                        <img onClick = {signOut} className = {HomeNav.nciUsers} src = {session?.user?.image} />
                    </div>