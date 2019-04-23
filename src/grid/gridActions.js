export const ADD_ROW = "ADD_ROW";
export const REMOVE_ROW = "REMOVE_ROW";
export const EDIT_FILM = "EDIT_FILM";

export const actions = {
  newFilm() {
    return {
      type: ADD_ROW
    };
  },
  deleteFilm(id) {
    return {
      type: REMOVE_ROW,
      payload: { id }
    };
  },
  editFilm(data) {
    return {
      type: EDIT_FILM,
      payload: { data }
    };
  }
};
