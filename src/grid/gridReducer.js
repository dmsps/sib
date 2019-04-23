import { ADD_ROW, REMOVE_ROW, EDIT_FILM } from "./gridActions";

function gridReducer(state = {}, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_ROW:
      return {
        films: [...state.films, newFilm()]
      };
    case REMOVE_ROW:
      return {
        films: deleteFilm(state.films, payload.id)
      };
    case EDIT_FILM:
      return {
        films: editFilm(state.films, payload.data)
      };
    default:
      return state;
  }
}

const newFilm = () => {
  return {
    id: Math.floor(1 + Math.random() * 100),
    title: "Название",
    country: "Страна",
    date: "Дата",
    description: "Описание",
    budjet: "Бюджет",
    price: "Цена",
    genre: "Жанр"
  };
};

const deleteFilm = (films, id) => films.filter(item => item.id !== id);

const editFilm = (films, data) =>
  films.map(item => {
    if (item.id === data.id) {
      return Object.assign(item, data);
    }
    return item;
  });

export default gridReducer;
