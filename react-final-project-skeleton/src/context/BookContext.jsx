import { createContext, useReducer, useState } from "react";
import { bookReducer } from "./BookReducer";
import { useFetch } from "../../../react-final-project-main/src/hooks/useFetch";

const BookContext = createContext();

export const BookProvider = () => {
  const [state, dispatch] = useReducer(bookReducer, { books: [] });
  const [filterParams, setFilterParams] = useState({ genre: "", search: "" });
  const queryString = new URLSearchParams(filterParams).toString();
  const { data, loading, error } = useFetch(`useFEtch`);

  return <></>;
};
