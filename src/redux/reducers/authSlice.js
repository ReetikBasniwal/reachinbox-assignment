import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../config/global_config';
import { jwtDecode } from "jwt-decode";

export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (_, { rejectWithValue }) => {
    try {
      window.location.href = `${BASE_URL}/auth/google-login?redirect_to=http://localhost:3000/auth/callback`;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const decodeToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return {
        user: {
          id: decodedToken.user?.id,
          firstName: decodedToken.user?.firstName,
          lastName: decodedToken.user?.lastName,
          email: decodedToken.user?.email,
          // Add any other user properties from the token
        },
        token
      };
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };

export const handleAuthCallback = createAsyncThunk(
  'auth/handleCallback',
  async (token, { rejectWithValue }) => {
    try {
        const decodedData = decodeToken(token);

        if (decodedData) {
          localStorage.setItem('token', token);
          return decodedData;
        } else {
          return rejectWithValue('Invalid token');
        }
        
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleAuthCallback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleAuthCallback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(handleAuthCallback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;