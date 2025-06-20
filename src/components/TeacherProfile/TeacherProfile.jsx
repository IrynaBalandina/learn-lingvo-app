import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/teacherSlice";
import { Link } from "react-router-dom";
const TeacherProfile = ({ teacher }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleFavourite(teacher.id));
  };

  return (
    <div className="teacher-card">

      <div className="teacher-header">
  <p><strong>Lessons:</strong> Online/Offline</p>
  <p><strong>Done:</strong> {teacher.lessons_done}</p>
  <p><strong>Rating:</strong> ⭐ {teacher.rating}</p>
  <p><strong>Price:</strong> ${teacher.price_per_hour}/год</p>
</div>
      <img src={teacher.avatar_url} alt={teacher.name} />
      <h2>{teacher.name} {teacher.surname}</h2>

      {teacher.languages && <p><strong>Мови:</strong> {teacher.languages.join(", ")}</p>}
      {teacher.levels && <p><strong>Рівні:</strong> {teacher.levels.join(", ")}</p>}
     
      {teacher.lesson_info && <p><strong>Опис:</strong> {teacher.lesson_info}</p>}
      {teacher.conditions && <p><strong>Умови:</strong> {teacher.conditions.join("; ")}</p>}
      {teacher.experience && <p><strong>Досвід:</strong> {teacher.experience}</p>}

      <button onClick={handleToggle}>
        {teacher.favourite ? "💖 В обраному" : "🤍 Додати в обране"}
      </button>
      <Link to={`/teachers/${teacher.id}`}>Read more</Link>
    </div>
  );
};

export default TeacherProfile;