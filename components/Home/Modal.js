import {useRecoilState} from 'recoil'
import {modalState} from '../../atoms/modalAtoms'
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useRef, useState} from 'react'
import { CameraIcon } from '@heroicons/react/outline'
const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
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
                        <img src = {selectedFile} onClick={()=>setSelectedFile(null)} alt="image" />
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
            </div>
        </Transition.Root>
    )
}

export default Modal
