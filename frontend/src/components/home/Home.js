import React,{Fragment,useState,useEffect} from 'react'
// import { Configuration, OpenAIApi } from "openai";
import { imagegenerateaction} from "../../action/imageaction";
import {useDispatch,useSelector} from 'react-redux';
import {postcreateaction} from "../../action/postaction"
import {saveAs} from "file-saver"


const Home = () => {
    const dispatch=useDispatch();

    const {image,success}=useSelector((state)=>state.imagered)

  
    const [avatarpreview,setAvatarpreview]=useState("")

    const [name,setName]=useState("");
    const [prompt,setPrompt]=useState("")
    const [size,setSize]=useState("");
    const [photo,setPhoto]=useState("")

  

    const generateimagehandler=()=>{
        dispatch(imagegenerateaction(prompt,size));

        
    }

    const createposthandler=(e)=>{
        dispatch(postcreateaction(name,prompt,photo))
    }

    useEffect(()=>{
        if(success){
            alert("photo generate successfully")
        };
        setPhoto(`data:image/jpeg;base64,${image}`)
    },[image,success])
    

    const downloadimage=(e)=>{
        saveAs(photo)
    }
    
  return (
    <Fragment>
        <div className="imagegenerator">
            <div>generate image</div>
            {/* <form
            encType='multipart/form-data'
            > */}
                <div>
                    <input type="text"
                    required
                    placeholder='plz enter name'
                    value={name}
                    name="name"
                    onChange={(e)=>setName(e.target.value)}

                    />
                </div>

                <div>
                    <input type="text"
                    required
                    placeholder='place enter description'
                    name='prompt'
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}


                    />
                </div>
                <div>
                    <input type="text"
                    required
                    placeholder='size'
                    name='size'
                    value={size}
                    onChange={(e)=>setSize(e.target.value)}
                    />
                </div>

                <div>{
                    <img src={photo} alt="avatar preview"/>
                    
                    }</div>
                    <button
                    onClick={generateimagehandler}
                    >generate</button>

                    <button
                   
                    onClick={createposthandler}
                    > create</button>
            {/* </form> */}

            </div>
            <button
            onClick={downloadimage}
            >download</button>
    </Fragment>
  )
}

export default Home