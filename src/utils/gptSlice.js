import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GPT Search",
    initialState:{
        showGptSearch: false,
        languageData : 'en'
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        toggleLang: (state,action)=>{
            state.languageData = action.payload
        }
    }
})

export const {toggleGptSearchView,toggleLang} = gptSlice.actions;
export default gptSlice.reducer