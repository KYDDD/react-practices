//keyof 연산자

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김연호",
  age: 27,
};

getPropertyKey(person, "name");
