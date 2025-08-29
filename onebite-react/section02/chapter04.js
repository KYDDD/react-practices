// 1. Spread연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest매개변수
// rest매개변수 뒤에는 추가적으로 매개변수를 더 선언할수 없음, 반드시 마지막에 오도록 설정해줘야 함
function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
