import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredUser: null, // Stores registered user details
  isAuthenticated: false, // Tracks authentication state
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.registeredUser = action.payload;
    },
    login(state, action) {
      const { email, password } = action.payload;
      if (
        state.registeredUser &&
        state.registeredUser.email === email &&
        state.registeredUser.password === password
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;

export const selectRegisteredUser = (state) => state.user.registeredUser;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
