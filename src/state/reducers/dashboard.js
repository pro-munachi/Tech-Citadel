export const dashboardReducer = (state = [], action) => {
  switch (action.type) {
    case "dashboard_data":
      return { data: action.payload };
    default:
      return state;
  }
};
