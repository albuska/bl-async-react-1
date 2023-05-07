import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6457ba0d1a4c152cf988e1a5.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios('/users');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
