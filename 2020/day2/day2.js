const pwds = require("./input");

const num1 = /\d+(?=-)/g;
const num2 = /(?<=-)\d+/g;
const cha = /\w(?=:)/g;
const pass = /(?<=: )\w+/g;

let counter1 = 0;
let counter2 = 0;

function validate(v) {
  const c = v.match(cha)[0];
  const p = v.match(pass)[0];
  const n1 = v.match(num1);
  const n2 = v.match(num2);

  let regex = new RegExp(c, "g");

  if (p.match(regex)) {
    if (p.match(regex).length >= n1 && p.match(regex).length <= n2) {
      counter1++;
    }
  }

  // Second part

  if (p.match(c)) {
    let index = p.indexOf(c, n1 - 1);
    let index2 = p.indexOf(c, n2 - 1);

    if (
      (index + 1 == n1 && index2 + 1 != n2) ||
      (index + 1 != n1 && index2 + 1 == n2)
    ) {
      counter2++;
    }
  }
}

for (pwd of pwds) {
  validate(pwd);
}

console.log(counter1);
console.log(counter2);
