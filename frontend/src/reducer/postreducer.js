import {createReducer} from "@reduxjs/toolkit"

const createpostinitialstate={
    post:{}
};

export const createpostreducer=createReducer(createpostinitialstate,{
    CREATE_POST_REQUEST:(state,action)=>{
        return{
            loading:true,
            post:{}
        }
    },
    CREATE_POST_SUCCESS:(state,action)=>{
        return{
            loading:false,
            post:action.payload.success,
        }
    },
    CREATE_POST_FAIL:(state,action)=>{
        return{
            loading:false,
            post:{},
            error:null,
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