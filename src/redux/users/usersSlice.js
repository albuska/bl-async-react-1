import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from 'redux/users/usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initionalState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
      currentUser: null,
    },
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.users.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.users.isLoading = false;
      state.users.items = action.payload;
      state.users.error = null;
    },
    [fetchUsers.rejected](state, action) {
      state.users.isLoading = false;
      state.users.error = action.payload;
    },
  },
});
export const usersReducer = usersSlice.reducer;
