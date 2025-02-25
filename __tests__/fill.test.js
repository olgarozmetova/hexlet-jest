import fill from '../src/fill.js';

test('fill', () => {
  let array = [];
  expect(fill(array, '*')).toEqual([]);
});

test('fill2', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('fill3', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('fill4', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('fill5', () => {
  let array = [1, 2, 3, 4];
  expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
