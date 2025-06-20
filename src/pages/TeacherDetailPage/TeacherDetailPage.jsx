import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import css from "./TeacherDetailPage.module.css";
import BookTrialModal from "../../components/BookTrialModal/BookTrialModal.jsx";

const TeacherDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teacher = useSelector(state =>
    state.teachers.items.find(t => t.id === Number(id))
  );

  if (!teacher) {
    return (
      <div>
        <h2>Викладача не знайдено</h2>
        <button onClick={() => navigate(-1)}>← Назад</button>
      </div>
    );
  }

  return (
    <div className={css.wrapper}>
      <button onClick={() => navigate(-1)} className={css.backBtn}>
        ← Назад до списку
      </button>

      <div className={css.header}>
        <img src={teacher.avatar_url} alt={teacher.name} className={css.avatar} />
        <div className={css.nameBlock}>
          <h1>{teacher.name} {teacher.surname}</h1>
          <p><strong>Speaks:</strong> {teacher.languages?.join(", ")}</p>
        </div>
      </div>

      <div className={css.miniHeader}>
        <span>🔝 Lessons online</span>
        <span>📘 Lessons done: {teacher.lessons_done}</span>
        <span>⭐ Rating: {teacher.rating}</span>
        <span>💵 Price / 1 hour: {teacher.price_per_hour}$</span>
      </div>

      <p><strong>Lesson Info:</strong> {teacher.lesson_info}</p>
      <p><strong>Conditions:</strong> {teacher.conditions?.join("; ")}</p>
      <p><strong>Description:</strong> {teacher.experience}</p>

      <div className={css.levels}>
        {teacher.levels?.map((level, index) => (
          <span key={index} className={css.levelTag}>{level}</span>
        ))}
      </div>

      <button className={css.bookBtn} onClick={() => setIsModalOpen(true)}>
        🗓️ Book trial lesson
      </button>

      {teacher.reviews?.length > 0 && (
        <div className={css.reviews}>
          <h3>Reviews</h3>
          {teacher.reviews.map((review, index) => (
            <div key={index} className={css.reviewItem}>
              <strong>{review.reviewer_name}</strong> — ⭐ {review.reviewer_rating}
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && <BookTrialModal teacher={teacher} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default TeacherDetailPage;
