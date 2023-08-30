import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const conterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.count += 1
        },
        decreament: (state) => {
            state.count -= 1
        }
    }
});