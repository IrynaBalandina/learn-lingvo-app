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
<div className={styles.teacher_info}>
  <div className={styles.teacher_header}>
    <p><strong>Lessons:</strong> Online/Offline</p>
    <p><strong>Done:</strong> {teacher.lessons_done}</p>
    <p><strong>Rating:</strong> ⭐ {teacher.rating}</p>
    <p><strong>Price:</strong> ${teacher.price_per_hour}/год</p>
  </div>
      <img className={styles.teacher.avatar} src={teacher.avatar_url} alt={teacher.name} />
  <h2>{teacher.name} {teacher.surname}</h2>

  <div className={styles.teacher_details}>
    {teacher.languages && <p><strong>Мови:</strong> {teacher.languages.join(", ")}</p>}
    {teacher.levels && <p><strong>Рівні:</strong> {teacher.levels.join(", ")}</p>}
    {teacher.lesson_info && <p><strong>Опис:</strong> {teacher.lesson_info}</p>}
    {teacher.conditions && <p><strong>Умови:</strong> {teacher.conditions.join("; ")}</p>}
    {teacher.experience && <p><strong>Досвід:</strong> {teacher.experience}</p>}
  </div>

  <button onClick={handleFavouriteClick}>
    {teacher.favourite ? '💖 В обраному' : '🤍 Додати в обране'}
  </button>

  <Link to={`/teachers/${teacher.id}`}>Read more</Link>
</div>
  );
};

export default TeacherProfile;