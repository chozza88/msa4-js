for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < 5; j++) {
    line += "*";
  }
  console.log(line);
}

// let ast = "";
// for (let i = 1; i < 6; i++) {
//   ast += "*";
//   console.log(ast);
// }

for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < i + 1; j++) {
    line += "*";
  }
  console.log(line);
}

console.log();
for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < 5 - i; j++) {
    line += "*";
  }
  console.log(line);
}

// let space = '     ';
// let star = '';
// for(let i = 0; i < 5; i++) {
//   star += '*';
//   console.log(`${space.slice(1, space.length - i)}${star}`);
// }

console.log();
for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < 5 - i - 1; j++) {
    line += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    line += "*";
  }
  console.log(line);
}

console.log();
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 0; j < 5 - i; j++) {
    line += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    line += "*";
  }
  console.log(line);
}
