

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import { logout } from '../../redux/authSlice';
import styles from './Header.module.css';
import logoIcon from '../../assets/logoIcon.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);

  const handleLoginClick = () => {
    dispatch(openModal({ type: 'auth', props: { mode: 'login' } }));
  };

  const handleRegisterClick = () => {
    dispatch(openModal({ type: 'auth', props: { mode: 'register' } }));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');  
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
       <img src={logoIcon} alt="LearnLingo" />
          LearnLingo
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
          <NavLink to="/teachers" className={({ isActive }) => isActive ? styles.active : ''}>Teachers</NavLink>
        
        </nav>

        <div className={styles.authButtons}>
          {user ? (
            <>
              <span className={styles.userEmail}>{user.email}</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>Log out</button>
            </>
          ) : (
            <>
              <button onClick={handleLoginClick} className={styles.loginBtn}>Log in</button>
              <button onClick={handleRegisterClick} className={styles.registerBtn}>Registration</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;