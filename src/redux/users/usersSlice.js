import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDeleteUser, fetchOneUser, fetchUsers } from 'redux/users/usersOperations';

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: {
//     users: {
//       items: [],
//       isLoading: false,
//       error: null,
//       currentUser: null,
//     },
//   },
//   extraReducers: {
//     [fetchUsers.pending](state) {
//       state.users.isLoading = true;
//     },
//     [fetchUsers.fulfilled](state, action) {
//       state.users.isLoading = false;
//       state.users.items = action.payload;
//       state.users.error = null;
//     },
//     [fetchUsers.rejected](state, action) {
//       state.users.isLoading = false;
//       state.users.error = action.payload;
//     },
//     [fetchOneUser.pending](state) {
//       state.users.isLoading = true;
//     },
//     [fetchOneUser.fulfilled](state, action) {
//       state.users.isLoading = false;
//       state.users.currentUser = action.payload;
//       state.users.error = null;
//     },
//     [fetchOneUser.rejected](state, action) {
//       state.users.error = action.payload;
//     },
//   },
// });
const handlePending = (state) => {
state.users.isLoading = true;
}

const handleRejected = (state, action) => {
      state.users.isLoading = false;
      state.users.error = action.payload;
}
const handleFulfilled = (state) => {
      state.users.isLoading = false;
        state.users.error = null;
}

const extraActions = [fetchUsers, fetchOneUser, fetchDeleteUser];

const getActions = type => isAnyOf(...extraActions.map(item => item[type])); 

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
      currentUser: null,
    },
  },
  extraReducers: builder => builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.items = action.payload;
    })
    .addCase(fetchOneUser.fulfilled, (state, action) => {
      state.users.currentUser = action.payload;
    })
    .addCase(fetchDeleteUser.fulfilled, (state, action) => {
      const index = state.users.items.findIndex(item => item.id === action.payload);
      state.users.items.splice(index, 1); 
    })
    .addMatcher(getActions('pending', handlePending))
    .addMatcher(getActions('rejected', handleRejected))
    .addMatcher(getActions('fulfilled', handleFulfilled))
});

export const usersReducer = usersSlice.reducer;
