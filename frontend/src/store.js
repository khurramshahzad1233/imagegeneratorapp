import {configureStore} from "@reduxjs/toolkit"
import { imagegeneratereducer } from "./reducer/imagereducer.js";
import { createpostreducer } from "./reducer/postreducer.js";

const store=configureStore({
    reducer:{
        imagered:imagegeneratereducer,
        createpostred:createpostreducer,
    }
});

export default store;