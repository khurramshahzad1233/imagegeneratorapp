import {createReducer} from "@reduxjs/toolkit"

const imageinitialstate={
    image:{}
};

export const imagegeneratereducer=createReducer(imageinitialstate,{
    IMAGE_GENERATE_REQUEST:(state,action)=>{
        return{
            loading:true,
            image:{}
        }
    },
    IMAGE_GENERATE_SUCCESS:(state,action)=>{
        return{
            loading:false,
            image:action.payload.img,
        }
    },
    IMAGE_GENERATE_FAIL:(state,action)=>{
        return{
            loading:false,
            image:{},
            error:action.payload,
        }
    },
    CLEAR_ERROR:(state,action)=>{
        return{
            ...state,
            error:null,
        }
    },
    default:(state,action)=>{
        return{
            state,
        }
    }
})