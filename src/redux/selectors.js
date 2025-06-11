export const teachersSelectors = {
  selectItems: state => state.teachers.items,
  selectLastKey: state => state.teachers.lastKey,
  selectHasMore: state => state.teachers.hasMore,
  selectSortBy: state => state.teachers.sortBy,
  selectPage: state => state.teachers.page,
  selectTeacherIsLoading: state => state.teachers.isLoading,
  selectTeacherError: state => state.teachers.error,
};