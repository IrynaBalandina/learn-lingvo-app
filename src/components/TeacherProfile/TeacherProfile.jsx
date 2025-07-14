import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../redux/teacherSlice";
import { openModal } from "../../redux/modalSlice";
import { Link } from "react-router-dom";
import styles from './TeacherProfile.module.css';

const TeacherProfile = ({ teacher }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);

  const handleFavouriteClick = () => {
    if (!isAuthenticated) {
      dispatch(openModal({ type: 'auth' })); 
      return;
    }
    dispatch(toggleFavourite(teacher.id));
  };

  return (
    <div className={styles.card}>
      {/* Фото викладача */}
      <div className={styles.avatarSection}>
        <img src={teacher.avatar_url} alt={teacher.name} className={styles.avatar} />
      </div>

      {/* Основна інформація */}
      <div className={styles.infoSection}>
        <div className={styles.header}>
          <p>📡 Lessons online</p>
          <p>Lessons done: {teacher.lessons_done}</p>
          <p>⭐ Rating: {teacher.rating}</p>
          <p>💰 Price / 1 hour: {teacher.price_per_hour}$</p>
        </div>

        <h2>{teacher.name} {teacher.surname}</h2>
        <p><strong>Speaks:</strong> {teacher.languages.join(", ")}</p>
        <p><strong>Lesson Info:</strong> {teacher.lesson_info}</p>
        <p><strong>Conditions:</strong> {teacher.conditions.join("; ")}</p>

        {/* Кнопки рівнів */}
        <div className={styles.levels}>
          {teacher.levels.map(level => (
            <span key={level} className={styles.levelTag}>{level}</span>
          ))}
        </div>

        {/* Нижній блок */}
        <div className={styles.actions}>
          <Link to={`/teachers/${teacher.id}`} className={styles.readMore}>Read more</Link>
          <button onClick={handleFavouriteClick} className={styles.favButton}>
            {teacher.favourite ? "💖" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;

