import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/authSlice.js';
import css from './AuthModal.module.css';
import { toast } from 'react-toastify';

const AuthModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  const { error, loading, user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      dispatch(login(form));
    } else {
      dispatch(register(form));
    }
  };

useEffect(() => {
  if (user) {
    onClose(); // закрити при вході
  }
}, [user, onClose]);

useEffect(() => {
  if (!loading && !user && !error && !isLoginMode) {
    // Якщо реєстрація пройшла, переключити в логін-режим
    setIsLoginMode(true);
  }
}, [loading, user, error, isLoginMode]);

useEffect(() => {
  if (error) {
    toast.error(error);
  }
}, [error]);

  useEffect(() => {
    if (user) {
      onClose(); // Закриваємо модалку при успішній авторизації/реєстрації
    }
  }, [user, onClose]);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>×</button>
        <h2>{isLoginMode ? 'Log In' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className={css.button} type="submit" disabled={loading}>
            {loading ? 'Please wait...' : isLoginMode ? 'Log In' : 'Register'}
          </button>
        </form>
        {error && <p className={css.error}>{error}</p>}
        <button className={css.switch} onClick={() => setIsLoginMode(!isLoginMode)}>
          {isLoginMode ? 'No account? Register' : 'Have an account? Log in'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;