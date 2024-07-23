import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: true,
    mails: [],
};

const actionSlice = createSlice({
    name: "onebox",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        },
        setMails: (state, action) => {
            state.mails = action.payload;
        }
    }
})

export const oneboxReducer = actionSlice.reducer;

export const oneboxAction = actionSlice.actions;
