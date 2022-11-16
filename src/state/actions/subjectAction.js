import data from "../../constants/data";

export const subjectInfo = (info, id) => {
  return (dispatch) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].uid === info) {
        const user = data[i].subjects;

        for (let j = 0; j < user.length; j++) {
          if (user[j].id === parseInt(id)) {
            dispatch({
              type: "subject_data",
              payload: user[j],
            });
          }
        }
      }
    }
  };
};
