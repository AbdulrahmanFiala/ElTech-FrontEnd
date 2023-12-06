import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {login, getUserData} from "../../api/services/user/user-services"
import { showToast } from '../../utils/toastUtil';

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async ({ credentials }, thunkAPI) => {
    try {
      const token = await login(credentials);
      const user = await getUserData();


      showToast('Login successful!', 'success');

      return { user: user, token: token };
    } catch (error) {
      showToast(error.toString(), 'error');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('token'),
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer for successful login
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    // Reducer for saving user data
    saveUserData: (state, action) => {
      state.user = action.payload;
    },

    // Reducer for logging out
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },

  extraReducers: {
    [loginUserThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
  },

});






// Export the action creators
export const {
  saveUserData,
  logout,
} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
