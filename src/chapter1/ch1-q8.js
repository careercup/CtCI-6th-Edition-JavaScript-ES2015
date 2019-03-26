'use strict';

/**  1st Solution
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
  if (!matrix) {
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


/** 2nd Solution
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is 
 * found then mark it in the first column and row. Then check the first row to  
 * see which columns to zero out. Repeat the process for the first column to 
 * see which rows to zero out.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(1)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */

const zero = (matrix) => {

    let rows = matrix.length,
        cols = matrix[0].length;
    
    //First pass through to indicate which cols and row to zero out
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0;
            }
        }
    }
  
    //zero out colums by looking at first row
    for (let j = 0; j < cols; ++j) {
        if (matrix[0][j] == 0) {
            for (let i = 0; i < rows; ++i) {
                matrix[i][j] = 0;
            }
        }
    }

    //zero out rows by looking at first col
    for (let i = 0; i < cols; ++i) {
        if (matrix[i][0] == 0) {
            for (let j = 0; j < rows; ++j) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}


