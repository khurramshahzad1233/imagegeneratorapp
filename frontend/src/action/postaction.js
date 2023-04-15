import axios from "axios";

export const postcreateaction=(name,prompt,photo)=>async(dispatch)=>{
    try {
        dispatch({type:"CREATE_POST_REQUEST"});
        const config={
            headers:{
                "content-type":"application/json"
            }
        };
        const {data}=await axios.post(`/api/post/create`,{name,prompt,photo},config);

        dispatch({
            type:"CREATE_POST_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"CREATE_POST_FAIL",
            payload:error.response.data.message,
        })
        
    }
}