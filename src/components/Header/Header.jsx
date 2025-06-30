import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import css from './Header.module.css';
import { logout } from '../../redux/authSlice';

const Header = ({ onLoginClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        🌐 LearnLingo
      </NavLink>

      <nav className={css.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink} end>
          Home
        </NavLink>
        <NavLink to="/teachers" className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink}>
          Teachers
        </NavLink>
      </nav>

      <div className={css.authButtons}>
        {user ? (
          <>
            <span className={css.userName}>👤 {user.email}</span>
            <button onClick={handleLogout} className={css.logoutBtn}>
              <LogOut size={16} /> Log out
            </button>
          </>
        ) : (
          <>
            <button onClick={onLoginClick} className={css.loginBtn}>
              <LogIn size={16} /> Log in
            </button>
            <NavLink to="/auth" className={css.registerBtn}>
              Registration
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;