import {useRecoilState} from 'recoil'
import {modalState} from '../../atoms/modalAtoms'
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useRef, useState,} from 'react'
import { CameraIcon } from '@heroicons/react/outline'
import {db, storage} from '../../firebase'
import { useSession} from 'next-auth/react'
import {addDoc, collection, doc, serverTimestamp, updateDoc} from '@firebase/firestore'
import { ref ,getDownloadURL,uploadString, updateMetadata} from '@firebase/storage'
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
            setSelectedFile(readerEvent.target.results);
        }
    }
    const uploadPost = async ()=>{
        if(load) return;
        setLoad(true);

        const docRef = await addDoc(collection(db,'posts'),{
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        })

        console.log("New doc added with d",docRef.id);
        const imageRef = ref(storage, 'posts/${docRef.id}/image')
        await uploadString(imageRef, selectedFile, "data_url").then(async sanpshot =>{
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db,'posts',docRef.id,{
                image: downloadURL
            }))
        })
        setOpen(fase);
        setLoad(false);
        setSelectedFile(null);
    }
    return (
        <Transition.Root show = {open} style={{
            position:'fixed',
            zIndex:'1000',
            width:'100%',
            height:'100vh',
            backgroundColor:'rgba(0,0,0,0.7)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }} >
            <h4 onClick={()=>setOpen(false)}>Close</h4>
            <div style ={{
                width:'25%',
                backgroundColor:'orange',
                height:'40vh',
            }}>
                    <h1>Hello World</h1>
                    {selectedFile ? (
                        <img style={{
                            width:'100%',
                            height:'30vh'
                        }} src = {selectedFile} onClick={()=>setSelectedFile(null)} alt="image" />
                    ) :(
                        <div 
                            onClick = {()=> filePickerRef.current.click()}
                        >
                            <CameraIcon 
                                style ={{
                                    width:'2.6rem',
                                    height:'2.6rem'
                                }}
                            />
                        </div>
                    )}

                    
                    <input 
                        ref = {filePickerRef}
                        type='file'
                        hidden
                        onChange = {addImageToPost}
                    />
                    <input 
                        type="text"
                        ref={captionRef}
                        placeholder="please enter a caption"
                    />
                    <button onClick={uploadPost} >
                        {load ? "uploading..." : "upload post"}
                    </button>
            </div>
        </Transition.Root>
    )
}

export default Modal
