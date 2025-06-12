import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/filterSlice.js";

const allLanguages = ["English", "Italian", "French","German", "Mandarin Chinese"];
const allLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

const Filters = () => {
  const dispatch = useDispatch();

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const toggleLevel = (level) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((l) => l !== level)
        : [...prev, level]
    );
  };

  const applyFilters = () => {
    dispatch(
      setFilters({
        languages: selectedLanguages,
        levels: selectedLevels,
        priceRange: [minPrice, maxPrice],
      })
    );
  };

  return (
    <div className="filters">
      <h3>Фільтри</h3>

      <div>
        <strong>Мови:</strong>
        {allLanguages.map((lang) => (
          <label key={lang}>
            <input
              type="checkbox"
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            {lang}
          </label>
        ))}
      </div>

      <div>
        <strong>Рівні:</strong>
        {allLevels.map((level) => (
          <label key={level}>
            <input
              type="checkbox"
              checked={selectedLevels.includes(level)}
              onChange={() => toggleLevel(level)}
            />
            {level}
          </label>
        ))}
      </div>

      <div>
        <strong>Ціна за годину:</strong>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          min="0"
          placeholder="від"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          min="0"
          placeholder="до"
        />
      </div>

      <button onClick={applyFilters}>Застосувати фільтри</button>
    </div>
  );
};

export default Filters;