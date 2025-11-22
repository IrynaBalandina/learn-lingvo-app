import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filterSlice.js';
import styles from './Filters.module.css';

const allLanguages = ['English', 'French', 'Spanish', 'Mandarin Chinese'];
const allLevels = ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper-Intermediate','C1 Advanced','C2 Proficient'];
const allPrices = [10, 20, 25, 30, 35, 40, 50];

const Filters = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  const applyFilters = () => {
    dispatch(setFilters({
      languages: language ? [language] : [],
      levels: level ? [level] : [],
      priceRange: price ? [0, Number(price)] : [0, 100],
    }));
  };
localStorage.setItem("selectedLevel", level || "");
  return (
    <div className={styles.filters}>
      <div className={styles.selectWrapper}>
        <label>Languages</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="">All</option>
          {allLanguages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <label>Level of knowledge</label>
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          {allLevels.map(lvl => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <label>Price</label>
        <select value={price} onChange={e => setPrice(e.target.value)}>
          <option value="">Any</option>
          {allPrices.map(p => (
            <option key={p} value={p}>{p} $</option>
          ))}
        </select>
      </div>

      <button className={styles.fButton} onClick={applyFilters}>Apply</button>
    </div>
  );
};

export default Filters;