import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/teacherSlice";

const TeacherProfile = ({ teacher }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleFavourite(teacher.id));
  };

  return (
    <div className="teacher-card">
      <img src={teacher.avatar_url} alt={teacher.name} />
      <h2>{teacher.name} {teacher.surname}</h2>

      {teacher.languages && <p><strong>Мови:</strong> {teacher.languages.join(", ")}</p>}
      {teacher.levels && <p><strong>Рівні:</strong> {teacher.levels.join(", ")}</p>}
      {teacher.price_per_hour && <p><strong>Ціна:</strong> ${teacher.price_per_hour}/год</p>}
      {teacher.lessons_done && <p><strong>Уроків:</strong> {teacher.lessons_done}</p>}
      {teacher.rating && (
        <p><strong>Рейтинг:</strong> ⭐ {teacher.rating} ({teacher.reviews?.length || 0} відгуків)</p>
      )}
      {teacher.lesson_info && <p><strong>Опис:</strong> {teacher.lesson_info}</p>}
      {teacher.conditions && <p><strong>Умови:</strong> {teacher.conditions.join("; ")}</p>}
      {teacher.experience && <p><strong>Досвід:</strong> {teacher.experience}</p>}

      <button onClick={handleToggle}>
        {teacher.favourite ? "💖 В обраному" : "🤍 Додати в обране"}
      </button>
    </div>
  );
};

export default TeacherProfile;