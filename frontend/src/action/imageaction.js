import axios from "axios"

export const imagegenerateaction=(prompt,size)=>async(dispatch)=>{
    try {
        dispatch({type:"IMAGE_GENERATE_REQUEST"});
        const config={
            headers:{
                "content-type":"application/json"
            }
        };
        console.log(prompt)
        const {data}=await axios.post(`/api/image`,{prompt,size},config);

        dispatch({
            type:"IMAGE_GENERATE_SUCCESS",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"IMAGE_GENERATE_FAIL",
            payload:error.response.data.message,
        })
        
    }
}