import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: true,
};

const actionSlice = createSlice({
    name: "onebox",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        }
    }
})

export const oneboxReducer = actionSlice.reducer;

export const oneboxAction = actionSlice.actions;
