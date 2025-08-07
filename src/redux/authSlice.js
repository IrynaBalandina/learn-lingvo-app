// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// const fakeAuthAPI = (data, isLogin = true) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data.email === 'test@test.com' && data.password === '123456') {
//         resolve({ email: data.email, name: 'Test User' });
//       } else if (isLogin) {
//         reject('User not found');
//       } else {
//         resolve({ email: data.email, name: 'New User' });
//       }
//     }, 1000);
//   });

// export const login = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
//   try {
//     const user = await fakeAuthAPI(formData, true);
//     return user;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// export const register = createAsyncThunk('auth/register', async (formData, { rejectWithValue }) => {
//   try {
//     const user = await fakeAuthAPI(formData, false);
//     return user;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       toast.info('Logged out');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = null;
//         toast.success('Logged in successfully');
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(register.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = null;
//         toast.success('Registered successfully');
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userFromStorage = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  const { email, password } = formData;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const existingUser = users.find(user => user.email === email && user.password === password);

  if (existingUser) {
    localStorage.setItem('user', JSON.stringify({ email }));
    return { email };
  } else {
    return thunkAPI.rejectWithValue('User not found');
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

  localStorage.setItem('user', JSON.stringify({ email }));
  return { email };
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userFromStorage || null,
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
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;