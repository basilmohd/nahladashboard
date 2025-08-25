import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const uploadFile = createAsyncThunk(
  'data/uploadFile',
  async (file, { rejectWithValue }) => {
    try {
      const fileFormData = new FormData();
      fileFormData.append('file', file);

      const response = await axios.put(
        // 'https://geub7uzlzh.execute-api.ap-southeast-2.amazonaws.com/dev/upload',
        `${process.env.REACT_APP_MOCKSERVER}/dev/upload`,
        fileFormData,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
                        'Accept': 'application/json'

          },
        }
      );
      return response.data.data; 
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  dataError: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = null
      state.loading = false
      state.dataError = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.data = null
        state.dataError = null
        state.loading = true
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.dataError = null

        state.data = action.payload;
        state.loading = false
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.dataError = action.payload
        state.loading = false
      });
  },
});

export const { resetData } = dataSlice.actions; 

export default dataSlice.reducer;
