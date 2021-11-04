import {useRecoilState} from 'recoil'
import {modalState} from '../../atoms/modalAtoms'
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useRef, useState,} from 'react'
import { CameraIcon } from '@heroicons/react/outline'
import {db, storage} from '../../firebase'
import {useSession} from 'next-auth/react'
import {addDoc, collection, doc, serverTimestamp, updateDoc} from '@firebase/firestore'
import { ref ,getDownloadURL,uploadString, updateMetadata} from '@firebase/storage'
import { useEffect } from 'react'
import ModalSty from '../../styles/scss/PostModal.module.scss'
const Modal = () => {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [load, setLoad] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const addImageToPost = (e)=>{
        const reader = new FileReader();

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent)=>{
            setSelectedFile(readerEvent.target.result);
        }
    }
    const uploadPost = async ()=>{
        if(load) return;
        setLoad(true);
        //adding post to firebase post collection
        const docRef = await addDoc(collection(db,'posts'),{
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        })

        console.log("New doc added with id",docRef.id);
        
        //uploading the image to firebase sotrage with post id
        const imageRef = ref(storage, 'posts/'+ (docRef.id) +  '/image');
        await uploadString(imageRef, selectedFile, "data_url")
        .then(
            async snapshot =>{
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db,'posts',docRef.id),{
                    image: downloadURL
                });
            }
        );
        setOpen(false);
        setLoad(false);
        setSelectedFile(null);
    };
    return (
        <Transition.Root className={ModalSty.modalContainer} show = {open} style={{
            position:'fixed',
            top:'0',
            left:'0',
            right:'0',
            bottom:'0',
            zIndex:'1000',
            width:'100%',
            height:'100vh',
            backgroundColor:'rgba(0,0,0,0.7)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }} >
            <h4 onClick={()=>setOpen(false)}>Close</h4>
            <div className={ModalSty.mcInner}>
                <div className={ModalSty.mciTop}>
                    <h6 className={ModalSty.mcitTitle}>Create new post</h6>
                     <button className={ModalSty.mcitButton} type="button"  onClick={uploadPost} >
                        {load ? "Sharing..." : "Share"}
                    </button>
                </div>
                <div className={ModalSty.mciBottom}>
                    <div className={ModalSty.mcibLeft}>
                        <div style={{
                            width:'100%',
                            height:'100%',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            {selectedFile ? (
                                <img style={{
                                    width:'100%',
                                    height:'100%',
                                    objectFit:'cover'
                                }} src = {selectedFile} onClick={()=>setSelectedFile(null)} alt="image" />
                            ) :(
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <div 
                                        onClick = {()=> filePickerRef.current.click()}
                                        style={{
                                            width:'2.9rem',
                                            height:'2.9rem',
                                            backgroundColor:'orangered',
                                            borderRadius:'50px',
                                            padding:'.3rem .3rem',
                                            cursor:'pointer',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center',

                                        }}
                                    >
                                        <CameraIcon 
                                            style ={{
                                                width:'2.8rem',
                                                height:'2.8rem',
                                            }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h5 style ={{
                                        color:"black",
                                        fontWeight:'550',
                                        fontSize:'1.04rem',
                                        paddingTop:'.7rem'
                                    }}>Upload Picture</h5>
                                </div>
                            )}
                        </div>
                        <div>
                            <input 
                                ref={filePickerRef}
                                type="file"
                                hidden
                                onChange = {addImageToPost}
                            />
                        </div>
                    </div>
                    <div className={ModalSty.mcibRight}>
                        <div style={{
                            width:'100%',
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            algnItems:'flex-start',
                            position:'relative',
                            padding:'1rem .1rem'
                        }}>
                            <div style={{
                                width:'2.4rem',
                                height:'2.4rem',
                                position:'relative'
                            }}>
                                <img style={{
                                    width:'100%',
                                    height:'100%',
                                    objectFit:'cover',
                                    borderRadius:'50px'
                                }} src = {session?.user?.image} alt="profile Image" />
                            </div> 
                            <h6 style={{
                                fontSize:'.92rem',
                                fontWeight:'550',
                                color:'black',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                alignItems:'flex-start',
                                marginLeft:'.8rem'
                            }}>{session?.user?.username}</h6>
                        </div>
                        <div style={{
                            width:'100%',
                            height:'6vh',
                            position:'relative',
                            padding:'.3rem .1rem'
                        }}>
                            <input 
                                style={{
                                    position:'absolute',
                                    top:'0',
                                    left:'0',
                                    right:'0',
                                    bottom:'0',
                                    width:'100%',
                                    height:'100%',
                                    fontSize:'1.01rem',
                                    fontWeight:'400',
                                    paddingLeft:'.3rem',
                                    border:'none',
                                    outline:'none'
                                }}
                                type="text"
                                ref={captionRef}
                                placeholder="Write a caption..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}

export default Modal
