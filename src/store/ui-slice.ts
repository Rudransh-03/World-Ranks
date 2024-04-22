import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotifState{
    loadingText: string;
}

const initialState: NotifState = {
    loadingText: "",
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showLoadingText(state, action: PayloadAction<string>){
            state.loadingText = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;