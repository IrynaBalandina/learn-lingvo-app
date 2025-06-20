import styles from './HomePage.module.css';
import heroImg from '../../assets/heroImg.jpg'; 
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            Unlock your potential with the best{' '}
            <span className={styles.highlight}>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors.
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button onClick={() => navigate('/teachers')}>Get started</button>
        </div>
        <div className={styles.right}>
          <img src={heroImg} alt="Hero" />
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <h2>32,000+</h2>
          <p>Experienced tutors</p>
        </div>
        <div>
          <h2>300,000+</h2>
          <p>5-star tutor reviews</p>
        </div>
        <div>
          <h2>120+</h2>
          <p>Subjects taught</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Tutor nationalities</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;