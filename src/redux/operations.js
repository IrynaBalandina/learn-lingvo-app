// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ref, get } from "firebase/database";
// import { database } from "../firebase";


// export const fetchTeachers = createAsyncThunk("teachers/fetch", async () => {
//   const snapshot = await get(ref(database));
//  const data = snapshot.val();

// const teachers = Array.isArray(data) ? data : data.teachers;

// return teachers?.filter(Boolean) ?? [];
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../firebase";

export const fetchTeachers = createAsyncThunk("teachers/fetch", async () => {
  const snapshot = await get(ref(database));
  const data = snapshot.val();

  const teachers = Object.entries(data.teachers || data).map(([id, teacher]) => ({
    ...teacher,
    id: String(id),
  }));

 return teachers.filter(t => typeof t === 'object' && t.name && t.surname);
});


