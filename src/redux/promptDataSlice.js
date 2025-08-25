import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitPromptData = createAsyncThunk(
  'data/submitPromptData',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://5xciypiy2l.execute-api.ap-southeast-2.amazonaws.com/dev/openai',
        { user_input: userInput },
        {
          headers: {
            'Content-Type': 'text/plain',
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
);

const initialState = {
  promptData: null,
  loading1: false,
  promptError: null,
};

const promptDataSlice = createSlice({
  name: 'promptData',
  initialState,
  reducers: {
    resetPromptData: (state) => {
      state.promptData = null
      state.loading1 = false
      state.promptError = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPromptData.pending, (state) => {
        state.promptData = null;
        state.promptError = null;
        state.loading1 = true;
      })
      .addCase(submitPromptData.fulfilled, (state, action) => {
        state.promptData = action.payload;
        state.loading1 = false;
      })
      .addCase(submitPromptData.rejected, (state, action) => {
        state.promptError = action.payload;
        state.loading1 = false;
      });
  },
});

export const { resetPromptData } = promptDataSlice.actions; 
export default promptDataSlice.reducer;   
