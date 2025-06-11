import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const FavouritePage = lazy(() => import('../../pages/FavouritePage/FavouritePage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
const TeachersPage = lazy(() => import('../../pages/TeachersPage/TeachersPage.jsx'));
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active-link' : ''}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teachers"
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Teachers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
             <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
    <Route path="/favourites" element={<FavouritePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
