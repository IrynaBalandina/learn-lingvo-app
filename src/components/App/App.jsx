import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header/Header.jsx'; 
import AuthModal from '../AuthModal/AuthModal.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() => import('../../pages/TeachersPage/TeachersPage'));
const TeacherDetailPage = lazy(() => import('../../pages/TeacherDetailPage/TeacherDetailPage.jsx'));
const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Header onLoginClick={() => setShowModal(true)} />

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/teachers/:id" element={<TeacherDetailPage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;