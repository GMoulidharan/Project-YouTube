import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state, action) =>{
            state.messages.splice(LIVE_CHAT_COUNT, 1);//restrict my length to 10 and remove my message from top
            state.messages.push(action.payload);
        },
    },
});

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;