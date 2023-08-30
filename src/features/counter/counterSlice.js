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

// There are 2 counters 
// One for adding and other for subtracting
// Slices are features of redux toolkit and we use them to handle a part 
// In this example we are handling the counter fearture which is part of the whole app
// This 