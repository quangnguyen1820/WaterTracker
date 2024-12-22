import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchUserRequest: (state) => {
            state.loading = true;
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
    userSlice.actions;
export default userSlice.reducer;