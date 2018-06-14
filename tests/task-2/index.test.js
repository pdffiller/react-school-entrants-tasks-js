import haveSameItems from '../../task-2';

import cases from './__fixtures__';

describe('Task 2 - Have Same Items', () => {
  const runTest = caseName => test(caseName, () => {
    const [first, second, result] = cases[caseName];
    expect(
      haveSameItems(first, second)
    ).toBe(result);
  });

  const runFrozenTest = caseName => test(`${caseName} - frozen`, () => {
    const [first, second, result] = cases[caseName];
    expect(
      haveSameItems(Object.freeze(first), Object.freeze(second))
    ).toBe(result);
  });

  Object.keys(cases).forEach(runTest);
  Object.keys(cases).slice(-2).forEach(runFrozenTest);
});