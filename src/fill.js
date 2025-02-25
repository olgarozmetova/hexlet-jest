const array = [1, 2, 3, 4];

function fill(coll, value, start = 0, end = coll.length) {
  start = Math.max(0, start);
  end = Math.min(end, coll.length);

  for (let i = start; i < end; i++) {
    coll[i] = value;
  }
  return coll;
}

fill(array, '*', 1, 3);
console.log(array); // => [1, '*', '*', 4]

fill(array, '*');
console.log(array); // => ['*', '*', '*', '*']

fill(array, '*', 4);
console.log(array); // => [1, 2, 3, 4]

fill(array, '*', 0, 10);
console.log(array); // => ['*', '*', '*', '*']

export default fill;
