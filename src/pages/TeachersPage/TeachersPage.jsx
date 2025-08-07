import TeachersList from "../../components/TeachersList/TeachersList.jsx";
import styles from './TeachersPage.module.css';

const TeachersPage = () => {
  return (
    <div className={styles.container}>
      <TeachersList />
    </div>
  );
};

export default TeachersPage;