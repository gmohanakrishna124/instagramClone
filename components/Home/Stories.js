import { useState,useEffect} from 'react'
import faker from 'faker'
import Storie from './Storie'
import MainSty from '../../styles/scss/MainFeed.module.scss'
const Stories = () => {
    const [storieData , setStorieData] = useState([]);

    useEffect(()=>{
        const storieData = [...Array(20)].map((_,i)=>(
            {...faker.helpers.contextualCard(),
            id: i,
            }
        ))
        setStorieData(storieData);
    },[])
    return (
        <div className = {MainSty.mclTop}>
            {storieData.map(({id,username, avatar})=>(
                <Storie 
                    key  = {id}
                    name = {username}
                    image = {avatar}
                />
            ))}
        </div>
    )
}

export default Stories
