// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백하수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 숫자를 sort메서드로 비교하면 숫자의 대소 비교가 아니라 그냥 사전순으로 비교하기 때문에 결과가 예상과 다를수 있다.
// let arr3 = ["b", "a", "c"];
// arr3.sort();

let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    //양수를 리턴 해주면 둘중에 더 작은 값이 앞에오도록 설정된다.
    return 1; // -> b,a 배치
  } else if (a < b) {
    //a가 b앞에 와라
    return -1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a,b 자리를 그대로 유지
  }
});

console.log(arr3);

// 4. toSorted(가장 최근에 추가된 최신 함수)
// sort는 원본 배열 자체를 정렬시키는 메서드 이고 toSorted 메서드는 원본 배열을 놔두고 새로운 배열을 반환하는 메서드 이다.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "yeono"];
//join의 괄호 안에 구분자를 넣어줌
const joined = arr6.join(" ");
console.log(joined);
