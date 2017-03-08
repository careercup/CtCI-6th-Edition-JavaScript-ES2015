export function merge(A, B) {
  for (let aIndex = 0; aIndex < A.length && 0 < B.length; aIndex++) {
    if (A[aIndex] > B[0]) {
      A.splice(aIndex, 0, B.shift());
      A.pop();
    }
  }
  return A;
}