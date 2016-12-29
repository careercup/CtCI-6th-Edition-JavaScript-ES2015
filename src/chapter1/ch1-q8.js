'use strict';

/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrix(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length),
    cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
}

/**
 * Instead of using two extra arrays as storage for rows and columns that will be
 * nullified, use the first row and first column.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(1)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrixConstantSpace(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  // check if first row has a zero
  let firstRowHasZero = false;
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // check if first column has a zero
  let firstColHasZero;
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // check for zeros in the rest of the rows/cols and update
  // first row/column storage accordingly
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // nullify rows based on the values in the first column
  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      nullifyRow(matrix, row);
    }
  }

  // nullify columns based on the values in the first row
  for (let col = 1; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      nullifyCol(matrix, col);
    }
  }

  // nullify first row if necessary
  if (firstRowHasZero) {
    nullifyRow(matrix, 0);
  }

  // nullify first col if necessary
  if (firstColHasZero) {
    nullifyCol(matrix, 0);
  }

  return matrix;
}

function nullifyRow(matrix, row) {
  for (let col = 0; col < matrix[row].length; col++) {
    matrix[row][col] = 0;
  }
}

function nullifyCol(matrix, col) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
}
