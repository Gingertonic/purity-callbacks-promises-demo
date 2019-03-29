const state = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 203
};

// non destructive
function pureFunc(state){
  const { firstName, lastName, age } = state;
  return `${firstName} ${lastName} is ${age} years old!`;
}

console.log(pureFunc(state));
console.log(state)

// destructive
function impureFunc(state){
  let age = state.age += Math.floor(Math.random() * 100)
  let { firstName, lastName } = state;
  return `${firstName} ${lastName} is ${age} years old!`;
}

console.log(impureFunc(state));
console.log(state)
