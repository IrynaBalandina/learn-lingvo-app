import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/operations";

import TeacherProfile from "../TeacherProfile/TeacherProfile";
import Filters from "../Filters/Filters.jsx";

const TeachersList = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector(state => state.teachers);
  const { languages, levels, priceRange } = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  console.log("Фільтри:", { languages, levels, priceRange });
  console.log("Викладачі:", items);

  const filtered = items.filter(teacher => {
    const langs = Array.isArray(teacher.languages)
      ? teacher.languages.map(l => l.toLowerCase())
      : [];

    const levelsList = Array.isArray(teacher.levels)
      ? teacher.levels
      : [];

    const price = Number(teacher.price_per_hour);

    const matchLanguage =
      languages.length === 0 ||
      langs.some(lang => languages.map(l => l.toLowerCase()).includes(lang));

    const matchLevel =
      levels.length === 0 ||
      levelsList.some(level => levels.some(f => level.startsWith(f)));

    const matchPrice =
      !isNaN(price) && price >= priceRange[0] && price <= priceRange[1];

    return matchLanguage && matchLevel && matchPrice;
  });

  if (status === "loading") return <p>Завантаження...</p>;
  if (status === "failed") return <p>Помилка: {error}</p>;

  return (
    <div>
      <Filters />
      <h2>Список викладачів</h2>
      {filtered.length === 0 ? (
        <p>Немає викладачів за заданими фільтрами</p>
      ) : (
        filtered.map((t, i) => <TeacherProfile key={i} teacher={t} />)
      )}
    </div>
  );
};

export default TeachersList;