import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import themes from '../../themes.js';


const HomePage = () => {
  const navigate = useNavigate();
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  const theme = themes[themeIndex];

   return (
   <div className={styles.container}>
  <div className={styles.contentWrapper}>
    <section className={styles.hero}>
      <div className={styles.left}>
          <h1>
            Unlock your potential with the best{' '}
            <span className=
            {styles.spanLanguage}
              style={{ backgroundColor: theme.languageBg }}
            >language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors.
            Elevate your language proficiency by connecting with experienced tutors.
          </p>
          <button
            style={{ backgroundColor: theme.buttonColor }}
            onClick={() => navigate('/teachers')}
          >
            Get started
          </button>
      </div>
      <div className={styles.right}>
          <img src={theme.image} alt="Hero" />
          </div>
    </section>

    <section className={styles.stats}>
      <div className={styles.statItem}>
        <h2>32,000+</h2><p>Experienced tutors</p>
      </div>
      <div className={styles.statItem}>
        <h2>300,000+</h2><p>5-star tutor reviews</p>
      </div>
      <div className={styles.statItem}>
        <h2>120+</h2><p>Subjects taught</p>
      </div>
      <div className={styles.statItem}>
        <h2>200+</h2><p>Tutor nationalities</p>
      </div>
    </section>
  </div>
</div>

    
  );
};
export default HomePage;