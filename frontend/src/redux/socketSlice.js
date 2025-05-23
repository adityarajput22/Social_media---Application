import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
    name:"socketio",
    initialState:{
        socket:null
    },
    reducers:{
        // actions
        setSocket:(state,action) => {
            state.socket = action.payload;
        }
    }
});
export const {setSocket} = socketSlice.actions;
export default socketSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const socketSlice = createSlice({
//     name: "socketio",
//     initialState: {
//         socketId: null // ✅ Store only the socket ID, not the whole socket object
//     },
//     reducers: {
//         setSocket: (state, action) => {
//             state.socketId = action.payload?.id || null;  // ✅ Extract socket ID
//         }
//     }
// });

// export const { setSocket } = socketSlice.actions;
// export default socketSlice.reducer;