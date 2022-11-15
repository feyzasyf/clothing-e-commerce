
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const initialState={
    categories: [],
    isLoading: false,
    error: null,

}

export const getCategoriesMap = createAsyncThunk("shop/getCategoriesMap", async()=>{
   try {
    const categoriesArray = await getCategoriesAndDocuments();
    return categoriesArray;
   } catch (error) {
        
   }
   
}
    
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState,  
     extraReducers(builder) {
        builder.addCase(getCategoriesMap.pending, (state)=>{
            state.isLoading= true;
        })
        .addCase(getCategoriesMap.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.categories = state.categories.concat(action.payload)
        })
        .addCase(getCategoriesMap.rejected, (state, action)=>{
            state.error= action.error.message
        })
    

     }

});

export const {setCategoriesMap} = categoriesSlice.actions;
export default categoriesSlice.reducer;