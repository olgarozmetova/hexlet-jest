import fill from '../src/fill.js';

test('should work with an empty array', () => {
  let array = [];
  expect(fill(array, '*')).toEqual([]);
});

test('should fill array from start to end index', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('should fill entire array if no start and end are specified', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('should not fill any element if start is greater than end', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('should fill from start index to the end of the array if end is greater than the array length', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
