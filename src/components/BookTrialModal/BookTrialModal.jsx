

import React, { useEffect } from "react";
import css from "./BookTrialModal.module.css";

const BookTrialModal = ({ teacher, onClose }) => {
  // Закриття по ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Закриття по бекдропу
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalOverlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}>×</button>
        <h2 className={css.title}>Book trial lesson</h2>
        <p className={css.text}>
          Our experienced tutor will assess your current language level,
          discuss your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={css.teacherInfo}>
          <img src={teacher.avatar_url} alt={teacher.name} className={css.avatar} />
          <p><strong>Your teacher:</strong> {teacher.name} {teacher.surname}</p>
        </div>

        <form className={css.form}>
          <label className={css.label}>What is your main reason for learning {teacher.languages?.[0] || 'a language'}?</label>
          <div className={css.radioGroup}>
            <label><input type="radio" name="reason" /> Career and business</label>
            <label><input type="radio" name="reason" /> Lesson for kids</label>
            <label><input type="radio" name="reason" /> Living abroad</label>
            <label><input type="radio" name="reason" /> Exams and coursework</label>
            <label><input type="radio" name="reason" /> Culture, travel or hobby</label>
          </div>

          <input type="text" placeholder="Full Name" className={css.input} />
          <input type="email" placeholder="Email" className={css.input} />
          <input type="tel" placeholder="Phone number" className={css.input} />

          <button type="submit" className={css.bookBtn}>Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookTrialModal;