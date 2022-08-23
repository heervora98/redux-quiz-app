import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
    name:'data',
    initialState:{
        list: [],
        loading: false
    },

    reducers:{
        datasRequested: (data,action) => {
            data.loading = true
        },

        datasReceived: (data, action) => {
            data.list = action.payload
            data.loading = false
        },

        datasRequestFailed: (data, action) => {
            data.loading = false
        }
    }
})

export default slice.reducer

const{datasRequested, datasReceived, datasRequestFailed} = slice.actions;

const url = "/quizdata";

export const loadPosts = (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: datasRequested.type,
            onSuccess: datasReceived.type,
            onError : datasRequestFailed.type
        })
    )
}