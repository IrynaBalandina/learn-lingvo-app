import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../firebase";


export const fetchTeachers = createAsyncThunk("teachers/fetch", async () => {
  const snapshot = await get(ref(database));
 const data = snapshot.val();

const teachers = Array.isArray(data) ? data : data.teachers;

return teachers?.filter(Boolean) ?? [];
});