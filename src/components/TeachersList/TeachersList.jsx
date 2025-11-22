
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/operations";
import css from "./TeacherList.module.css";
import TeacherProfile from "../TeacherProfile/TeacherProfile";
import Filters from "../Filters/Filters.jsx";

const TeachersList = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);
  const [expandedId, setExpandedId] = useState(null);

  const { items, status, error } = useSelector(state => state.teachers);
  const { languages, levels, priceRange } = useSelector(state => state.filters);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const filtered = items.filter(teacher => {
    const langs = Array.isArray(teacher.languages)
      ? teacher.languages.map(l => l?.toLowerCase?.() || "")
      : [];
    const levelsList = Array.isArray(teacher.levels) ? teacher.levels : [];
    const price = Number(teacher.price_per_hour || 0);

    const matchLanguage =
      languages.length === 0 ||
      langs.some(lang => languages.map(l => l.toLowerCase()).includes(lang));

    const matchLevel =
      levels.length === 0 ||
      levelsList.some(level => levels.includes(level));

    const matchPrice =
      price >= priceRange[0] && price <= priceRange[1];

    return matchLanguage && matchLevel && matchPrice;
  });

  const visibleTeachers = filtered.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount(prev => prev + 4);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <Filters />

      {filtered.length === 0 ? (
        <p>There is no teacher according to the specified filters</p>
      ) : (
        <>
          {visibleTeachers.map((t) => (
            <TeacherProfile
              key={String(t.id)}
              teacher={t}
              isExpanded={expandedId === t.id}
              onToggleExpand={() => toggleExpand(t.id)}
            />
          ))}

          {visibleCount < filtered.length && (
            <button
              className={css.loadButton}
              onClick={handleLoadMore}
              style={{ marginTop: "20px" }}
            >
              Load more
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TeachersList;