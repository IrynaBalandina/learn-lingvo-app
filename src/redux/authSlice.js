import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  const { email, password } = formData;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const existingUser = users.find(user => user.email === email && user.password === password);

  if (existingUser) {
    localStorage.setItem('user', JSON.stringify({ email }));
    return { email };
  } else {
    return thunkAPI.rejectWithValue('Invalid email or password');
  }
});

export const register = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  const { email, password } = formData;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const exists = users.some(user => user.email === email);
  if (exists) {
    return thunkAPI.rejectWithValue('Email already registered');
  }

  const newUser = { email, password };
  const updatedUsers = [...users, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));


  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
     
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
