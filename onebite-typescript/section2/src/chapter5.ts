// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해주도 사용하는 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

type User = {
  name: string;
  role: number;
  language: string;
};

const User1: User = {
  name: "김연호",
  role: Role.ADMIN,
  language: Language.korean,
};
const User2: User = {
  name: "김정인",
  role: Role.USER,
  language: Language.korean,
};
const User3: User = {
  name: "최재민",
  role: Role.GUEST,
  language: Language.korean,
};

console.log(User1, User2, User3);
