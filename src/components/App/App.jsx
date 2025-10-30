

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Header/Header.jsx';
import AuthModal from '../AuthModal/AuthModal.jsx';
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import { closeModal } from '../../redux/modalSlice';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() => import('../../pages/TeachersPage/TeachersPage'));

const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(state => state.modal.modalType);
  const modalProps = useSelector(state => state.modal.modalProps);

  return (
    <Router>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Header />

      {modalType === 'auth' && (
        <AuthModal
          key={modalProps?.mode}        
          onClose={() => dispatch(closeModal())}
          mode={modalProps?.mode}
        />
      )}

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
          
            <Route
              path="/favourites"
              element={
                <PrivateRoute>
                  <FavouritePage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;