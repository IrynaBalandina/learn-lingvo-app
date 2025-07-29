import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../redux/teacherSlice";
import { openModal } from "../../redux/modalSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from './TeacherProfile.module.css';

const TeacherProfile = ({ teacher }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);

const handleFavouriteClick = () => {
  if (!isAuthenticated) {
    toast.warn("Цей функціонал доступний лише для авторизованих користувачів", {
      position: "top-center",
      autoClose: 3000,
    });
    dispatch(openModal({ type: 'auth' }));
    return;
  }

  dispatch(toggleFavourite(teacher.id));
};
  if (!teacher || typeof teacher !== "object") return null;

  return (
    <div className={styles.card}>
  
      <div className={styles.avatarSection}>
        <img
          src={teacher.avatar_url}
          alt={`${String(teacher.name)} ${String(teacher.surname)}`}
          className={styles.avatar}
        />
      </div>

 
      <div className={styles.infoSection}>
        <div className={styles.header}>
          <p>📡 Lessons online</p>
          <p>Lessons done: {String(teacher.lessons_done)}</p>
          <p>⭐ Rating: {String(teacher.rating)}</p>
          <p>💰 Price / 1 hour: {String(teacher.price_per_hour)}$</p>
        </div>

        <h2>{String(teacher.name)} {String(teacher.surname)}</h2>

     <p><strong>Speaks:</strong> {
  Array.isArray(teacher.languages)
    ? teacher.languages.join(", ")
    : typeof teacher.languages === "object"
    ? Object.values(teacher.languages).join(", ")
    : String(teacher.languages || "")
}</p>

    <p><strong>Lesson Info:</strong> {typeof teacher.lesson_info === "string" ? teacher.lesson_info : JSON.stringify(teacher.lesson_info)}</p>

        <p><strong>Conditions:</strong> {
          Array.isArray(teacher.conditions)
            ? teacher.conditions.join("; ")
            : String(teacher.conditions || "")
        }</p>

    
        <div className={styles.levels}>
          {Array.isArray(teacher.levels) &&
            teacher.levels.map(level => (
              <span key={level} className={styles.levelTag}>
                {String(level)}
              </span>
            ))}
        </div>


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