export const subjectReducer = (state = {}, action) => {
  switch (action.type) {
    case "subject_data":
      return { data: action.payload };

    default:
      return state;
  }
};
