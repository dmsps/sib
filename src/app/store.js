import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import gridReducer from "../grid/gridReducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const initialState = {
  films: [
    {
      id: 1,
      title: "Звёздные войны: Эпизод 1 – Скрытая угроза",
      country: "США",
      date: "1999",
      description: "«У каждой саги есть начало»",
      budjet: "$115 000 000",
      price: "$10",
      genre: "Фантастика"
    },
    {
      id: 2,
      title: "Звёздные войны: Эпизод 2 – Атака клонов",
      country: "США",
      date: "2002",
      description: "«Size matters not. Except on an IMAX Screen»",
      budjet: "$115 000 000",
      price: "$10",
      genre: "Фантастика"
    }
  ]
};

export const store = createStore(
  gridReducer,
  initialState,
  applyMiddleware(...middleware)
);
