import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name : 'resultSlice',
    initialState : 0,
    reducers : {
        INCREMENT(state){
            console.log('result increase')
            return state += 1
        }
    }
})

export const {INCREMENT} = resultSlice.actions
export default resultSlice.reducer