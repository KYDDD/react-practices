//제네릭

//제네릭함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
str.toUpperCase();

let arr = func<[number, number, number]>([1, 2, 3]);
