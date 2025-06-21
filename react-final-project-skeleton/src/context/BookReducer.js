export const bookReducer = (state, action) => {
  switch (action.type) {
    //책들을  등록
    case "SET_BOOKS":
      return { ...state, books: action.payload };
    // 새 책을 추가
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    // 기존 책의 데이터를 수정
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) => (book.id === action.payload.id ? { ...book, ...action.payload } : book)),
      };
    // 특정 책을 삭제
    case "DELETE_BOOK":
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};
