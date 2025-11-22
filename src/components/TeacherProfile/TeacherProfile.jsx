import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../redux/teacherSlice";
import { openModal } from "../../redux/modalSlice";
import BookTrialModal from "../../components/BookTrialModal/BookTrialModal.jsx";
import { toast } from "react-toastify";
import styles from './TeacherProfile.module.css';
import { useState,useEffect } from "react";
import  { fetchTeachers } from "../../redux/operations";
import heartIcon from "../../assets/heartIcon.svg";
import favIcon from "../../assets/favIcon.svg";


const TeacherProfile = ({ teacher }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
const handleToggleExpand = () => {
  setExpanded(prev => !prev);
};


const selectedLevel = useSelector(state => state.filters.levels[0] || "");



  useEffect(() => {
    if (!teacher && status === "idle") dispatch(fetchTeachers());
  }, [dispatch, teacher, status]);

const handleFavouriteClick = () => {
  if (!isAuthenticated) {
    toast.warn("To use this feature, you need to log in!", {
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
          <p className={styles.languages}>Languages</p>
          <p> Lessons online</p>|
          <p>Lessons done: {String(teacher.lessons_done)}</p>|
          <p>⭐ Rating: {String(teacher.rating)}</p>|
         <p>Price / 1 hour: <span className={styles.spanPrice}>{String(teacher.price_per_hour)}$</span></p>
  <button
            onClick={handleFavouriteClick}
            className={`${styles.favButton} ${
              teacher.favourite ? styles.active : ""
            }`}
          >
            <img
              src={teacher.favourite ? favIcon : heartIcon}
              alt="favourite"
              className={styles.favIcon}
            />
          </button>
        </div>

        <h2 className={styles.name}>{String(teacher.name)} {String(teacher.surname)}</h2>

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
<span
  className={styles.readMoreLink}
  onClick={handleToggleExpand}
  role="button"
>
  {expanded ? "Show less" : "Read more"}
</span>
    


<div className={styles.levels}>
  {teacher.levels?.map((level, i) => {
    const cleanLevel = level.replace("#", "");

    return (
      <span
        key={i}
        className={`${styles.levelTag} ${
          selectedLevel === cleanLevel ? styles.activeLevel : ""
        }`}
      >
        #{cleanLevel}
      </span>
    );
  })}
</div>


        <div className={styles.actions}>

{expanded && (
  <div className={styles.moreInfo}>
            <p ><strong>Description:</strong> {teacher.experience}</p>
    <p><strong>Reviews:</strong></p>
    <ul>
      {teacher.reviews?.map((review, i) => (
        <li key={i}>
          <strong>{review.reviewer_name}:</strong> {review.comment}
        </li>
      ))}
    </ul>

     <div className={styles.trialLessonButton}>
      <button className={styles.bookBtn} onClick={() => setIsModalOpen(true)}>🗓️ Book trial lesson</button>
                 {isModalOpen && <BookTrialModal teacher={teacher} onClose={() => setIsModalOpen(false)} />}
</div>
  </div>
)}
       
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;

