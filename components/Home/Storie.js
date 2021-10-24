import MainSty from '../../styles/scss/MainFeed.module.scss'
const Storie = ({key, name, image}) => {
    return (
        <div className = {MainSty.mcltCards}>
            <div index = {key} className = {MainSty.mcltcImgContainer}
                
            >
                <img className = {MainSty.mclticImage} src ={image} alt= "storieImages" 
                    
                />
            </div>
            <p className = {MainSty.mcltContent}>{name}</p>
        </div>
    )
}

export default Storie
