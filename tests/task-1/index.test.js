import fillSpiralMatrix from '../../task-1';
import spiralMatrix from './__fixtures__';


describe('Task 1 - Fill Spiral Matrix', () => {
  test('n = 1', () => {
    const n = 1;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 2', () => {
    const n = 2;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 5', () => {
    const n = 5;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 6', () => {
    const n = 6;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 10', () => {
    const n = 10;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 20', () => {
    const n = 20;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });

  test('n = 1000', () => {
    const n = 1000;
    const result = fillSpiralMatrix(n);
    expect(result.length).toBe(n);
    result.forEach(
      (row, index) => {
        expect(row.length).toBe(n);
        expect(row).toEqual(spiralMatrix[n][index])
      }
    );
  });
});