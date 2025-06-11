import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeachers } from "../../redux/operations.js";
import TeacherProfile from "../TeacherProfile/TeacherProfile.jsx";

const TeachersList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.teachers.items);
  const status = useSelector((state) => state.teachers.status);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Завантаження...</p>;
  if (status === "failed") return <p>Помилка: {error}</p>;

  return (
    <div>
      <h1>Список викладачів</h1>
      {(!items || items.length === 0) ? (
        <p>Немає викладачів для відображення.</p>
      ) : (
        items.map((teacher, index) => (
          <TeacherProfile key={index} teacher={teacher} />
        ))
      )}
    </div>
  );
};

export default TeachersList;