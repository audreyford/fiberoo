function fiberoo() {
  const outputArray = [];
  let x = 0;
  let y = 1;
  let z = x + y;
  outputArray.push(x);
  outputArray.push(y);
  outputArray.push(z);
  for (let i = 0; i < 97; i++) {
    x = y;
    y = z;
    z = x + y;
    outputArray.push(z);
  }
  return outputArray;
}
console.log(fiberoo());
