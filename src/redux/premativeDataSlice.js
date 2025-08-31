import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const premativeUploadFile = createAsyncThunk(
  'data/uploadFile',
  async (file, { rejectWithValue }) => {
    try {
      const fileFormData = new FormData();
      fileFormData.append('file', file);

      const response = await axios.put(
         //'https://py6bssbh06.execute-api.ap-southeast-2.amazonaws.com/dev/xer_upload',
        `${process.env.REACT_APP_MOCKSERVER}/dev/xer_upload`,
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
  premativeData: null,
  loading: false,
  premativeError: null,
};

const permativeDataSlice = createSlice({
  name: 'premativeData',
  initialState,
  reducers: {
    resetPremativeData:(state)=>{
      state.premativeData = null
      state.loading = false
      state.premativeError = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(premativeUploadFile.pending, (state) => {
        state.premativeData = null
        state.premativeError = null
        state.loading = true
      })
      .addCase(premativeUploadFile.fulfilled, (state, action) => {
        state.premativeData = action.payload
        state.loading = false
      })
      .addCase(premativeUploadFile.rejected, (state, action) => {
        state.premativeError = action.payload
        state.loading = false
      })
  },
});

export const { resetPremativeData } = permativeDataSlice.actions; 

export default permativeDataSlice.reducer;
