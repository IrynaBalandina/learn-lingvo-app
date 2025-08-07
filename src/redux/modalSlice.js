// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   modalType: null,
//   modalProps: null,
// };

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.modalType = action.payload.type;
//       state.modalProps = action.payload.props || null;
//     },
//     closeModal: state => {
//       state.modalType = null;
//       state.modalProps = null;
//     },
//   },
// });

// export const { openModal, closeModal } = modalSlice.actions;
//  const modalReducer = modalSlice.reducer;
//  export default modalReducer;

import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,   // Наприклад: 'auth'
    modalProps: {},    // Додаткові параметри, наприклад { mode: 'login' }
  },
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.type;
      state.modalProps = action.payload.props || {};
    },
    closeModal: (state) => {
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;