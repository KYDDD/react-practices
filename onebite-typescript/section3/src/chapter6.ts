// 타입단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김연호";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "둥이",
  color: "white",
  breed: "시바",
} as Dog;

//타입 단언의 규칙
// 값 as 단언 ← 이런 형태의 단언식에서 값을 A 단언하는 타입을 B라고 했을때 A가 B의 슈퍼 타입이거나 A 가 B의 서브타입 이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

//const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// non null단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김연호",
};

const len: number = post.author!.length;
