import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeacherProfile from "../../components/TeacherProfile/TeacherProfile";
import { fetchTeachers } from "../../redux/operations";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.teachers);
  const favouriteTeachers = items.filter(t => t.favourite);


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Favourite teachers</h2>
      {favouriteTeachers.length === 0 ? (
        <p>There is no favourite teachers</p>
      ) : (
        favouriteTeachers.map(t => (
          <TeacherProfile key={t.id} teacher={t} />
        ))
      )}
    </div>
  );
};

export default FavouritePage;
