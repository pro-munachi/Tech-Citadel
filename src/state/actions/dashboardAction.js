import data from "../../constants/data";

export const dashboardInfo = (info) => {
  return (dispatch) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].uid === info) {
        dispatch({
          type: "dashboard_data",
          payload: data[i].subjects,
        });
      }
    }
  };
};
