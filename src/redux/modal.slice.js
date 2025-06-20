import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: null,
  modalProps: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.type;
      state.modalProps = action.payload.props || null;
    },
    closeModal: state => {
      state.modalType = null;
      state.modalProps = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;