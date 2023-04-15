import React,{createContext,useContext,useState} from 'react';
const Imagecontext=createContext();

const Imageprovider = ({children}) => {

    const [start,setStart]=useState("")
    const [result,setResult]=useState("")
    const [loading,setLoading]=useState("")
  return (
    <Imagecontext.Provider value={{start,setStart,result,setResult,loading,setLoading}}>
        {children}
        </Imagecontext.Provider>
    
  )
};

export const Imagestate=()=>{
    return useContext(Imagecontext)
}

export default Imageprovider;