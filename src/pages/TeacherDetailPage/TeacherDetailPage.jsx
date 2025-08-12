
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toggleFavourite } from "../../redux/teacherSlice";
import { openModal } from "../../redux/modalSlice";
import { toast } from "react-toastify";
import css from "./TeacherDetailPage.module.css";
import BookTrialModal from "../../components/BookTrialModal/BookTrialModal.jsx";
import { fetchTeachers } from "../../redux/operations";

const TeacherDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { items, status } = useSelector((s) => s.teachers);
  const isAuthenticated = useSelector((s) => s.auth.user !== null);
  const teacher = items.find((t) => String(t.id) === id);
  const [selectedLevel, setSelectedLevel] = useState(null);
    useEffect(() => {
    const savedLevel = localStorage.getItem("selectedLevel");
    if (savedLevel) {
      setSelectedLevel(savedLevel);
    }
  }, []);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    localStorage.setItem("selectedLevel", level);
  };
  useEffect(() => {
    if (!teacher && status === "idle") dispatch(fetchTeachers());
  }, [dispatch, teacher, status]);

  const handleFavouriteClick = () => {
    if (!isAuthenticated) {
      toast.warn("To use this feature, you need to log in!", {
        position: "top-center",
        autoClose: 3000,
      });
      dispatch(openModal({ type: "auth" }));
      return;
    }
    dispatch(toggleFavourite(teacher.id));
  };

  if (!teacher) return <div><h2>Teacher is not found</h2></div>;

  return (
    <div className={css.container}>
    
      <article className={css.detailCard}>
     
        <div className={css.avatarCol}>
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className={css.avatar}
          />
        </div>

      
        <div className={css.contentCol}>
        
        

      
          <div className={css.statsRow}>
                  <p className={css.languages}>Languages</p>
                        <p> Lessons online</p>
                        <p>Lessons done: {String(teacher.lessons_done)}</p>
                        <p>⭐ Rating: {String(teacher.rating)}</p>
                        <p>Price / 1 hour: {String(teacher.price_per_hour)}$</p>
                          <button className={css.heart} onClick={handleFavouriteClick}>
              {teacher.favourite ? "🧡" : "🤍"}
            </button>
          </div>
  <div className={css.topRow}>
            <h1 className={css.name}>{teacher.name} {teacher.surname}</h1>
          
          </div>
  
          <div className={css.textBlock}>
            <p><strong>Speaks:</strong> {teacher.languages?.join(", ")}</p>
            <p><strong>Lesson Info:</strong> {teacher.lesson_info}</p>
            <p><strong>Conditions:</strong> {teacher.conditions?.join("; ")}</p>
            <p><strong>Description:</strong> {teacher.experience}</p>
<h3>Reviews</h3>
        {teacher.reviews?.map((r, i) => (
          <div key={i} className={css.reviewItem}>
            <strong>{r.reviewer_name}</strong> — ⭐ {r.reviewer_rating}
            <p>{r.comment}</p>
          </div>
        ))}
          </div>
        </div>
      </article>

    
      <div className={css.levelsRow}>
               <div className={css.levels}>
          {teacher.levels?.map((level, i) => (
            <span
              key={i}
              className={`${css.levelTag} ${
                selectedLevel === level ? css.activeLevel : ""
              }`}
              onClick={() => handleLevelSelect(level)}
            >
              {level}
            </span>
          ))}
        </div>

      </div>
   <div className={css.trialLessonButton}>
      <button className={css.bookBtn} onClick={() => setIsModalOpen(true)}>🗓️ Book trial lesson</button>
                 {isModalOpen && <BookTrialModal teacher={teacher} onClose={() => setIsModalOpen(false)} />}
</div>
 
    </div>
  );
};

export default TeacherDetailPage;