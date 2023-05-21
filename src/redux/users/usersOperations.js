import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://644eabac1b4567f4d58d814d.mockapi.io';

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

export const fetchOneUser = createAsyncThunk(
  'users/fetchOneUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios(`/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteUser = createAsyncThunk(
  'users/fetchDeleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddUser = createAsyncThunk(
  'users/fetchAddUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchEditUser = createAsyncThunk(
  'users/fetchEditUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/users/${data.id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
