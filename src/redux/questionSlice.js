import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = () => async (dispatch, getState) => {
    let questions = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz')
    dispatch(GET_DATA(questions.data.data))
}

const questionData = createSlice({
    name : 'questionData',
    initialState : [],
    reducers : {
        GET_DATA(state, action){
            return action.payload
        }
    }
})

export const {GET_DATA} = questionData.actions
export default questionData.reducer