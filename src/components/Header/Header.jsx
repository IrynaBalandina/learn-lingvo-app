import { NavLink } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import css from './Header.module.css';

const Header = ({ onLoginClick }) => {
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
        <button className={css.loginBtn} onClick={onLoginClick}>
          <LogIn size={16} /> Log in
        </button>
   
        <NavLink to="/auth" className={css.registerBtn}>
          Registration
        </NavLink>
      </div>
    </header>
  );
};

export default Header;