import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    onlineUsers: [],
    messages: [],
    activeChat: null,
    // Remove socket from state, only store serializable data
};
const chatSlice = createSlice({
    name:"chat",
    initialState:{
        onlineUsers:[],
        messages:[],
    },
    reducers:{
        // actions
        setOnlineUsers:(state,action) => {
            state.onlineUsers = action.payload;
        },
        setMessages:(state,action) => {
            state.messages = action.payload;
        }
    }
});
export const {setOnlineUsers, setMessages} = chatSlice.actions;
export default chatSlice.reducer;



// // Added 
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     onlineUsers: [],
//     // other chat-related state
// };

// const chatSlice = createSlice({
//     name: 'chat',
//     initialState,
//     reducers: {
//         setOnlineUsers: (state, action) => {
//             state.onlineUsers = action.payload;
//         },
//         // other reducers
//     }
// });

// export const { setOnlineUsers } = chatSlice.actions;
// export default chatSlice.reducer;