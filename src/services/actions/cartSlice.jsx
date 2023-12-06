import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    cartCount: (state, action) => {
      state.count = action.payload

      localStorage.setItem('cart', action.payload);
    }
  },
});

// Export actions from the slice
export const{ cartCount } = cartSlice.actions;

// Export the reducer as the default export
export default cartSlice.reducer;