const TeacherProfile = ({ teacher }) => {
  if (!teacher) return null;

  return (
    <div className="teacher-card">
      <img src={teacher.avatar_url} alt={`${teacher.name}`} className="avatar" />
      <h2>{teacher.name} {teacher.surname}</h2>
      <p><strong>Мови:</strong> {teacher.languages?.join(", ")}</p>
      <p><strong>Рівні:</strong> {teacher.levels?.join(", ")}</p>
      <p><strong>Ціна:</strong> ${teacher.price_per_hour}/год</p>
      <p><strong>Уроків проведено:</strong> {teacher.lessons_done}</p>
      <p><strong>Рейтинг:</strong> ⭐ {teacher.rating} ({teacher.reviews?.length || 0} відгуків)</p>
      <p><strong>Опис уроків:</strong> {teacher.lesson_info}</p>
      <p><strong>Умови:</strong> {teacher.conditions?.join("; ")}</p>
      <p><strong>Досвід:</strong> {teacher.experience}</p>
      <button>Book trial Lesson</button>
    </div>
  );
};

export default TeacherProfile;