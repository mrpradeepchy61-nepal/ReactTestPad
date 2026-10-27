import {createSlice} from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "employee",
    initialState: {remainingLeaves: 12},
    reducers: {
        applyLeave: ((state) => {
            if(state.remainingLeaves > 0){
                state.remainingLeaves -= 1
            }
        }),

        cancelLeave: ((state) => {
            if(state.remainingLeaves < 12){
                state.remainingLeaves += 1;
            }
        })

    }
})

export const {applyLeave, cancelLeave} = reduxSlice.actions;
export default reduxSlice.reducer;
