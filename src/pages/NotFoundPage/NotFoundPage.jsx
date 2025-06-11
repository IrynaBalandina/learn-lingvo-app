import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          marginTop: '20px'
        }}
      >
        На головну
      </button>
    </div>
  );
};

export default NotFoundPage;