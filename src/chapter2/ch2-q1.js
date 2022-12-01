'use strict';

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list) {
  if (!list) {
    return list;
  }

  let seen = new Set(),
    node = list;

  // add head
  seen.add(node.val);
  while (node.next) {
    if (seen.has(node.next.val)) {
      // skip next node
      node.next = node.next.next;
    }
    else {
      seen.add(node.next.val);
      node = node.next;
    }
  }

  return list; // return list, head will never change
}

/**
 * Using the "Runner" technique
 * Time O(n^2)
 * Space O(1)
 */
function removeDuplicates(myLinked) {
  let currentNode = myLinked;
  while (currentNode !== null) {
    let runner = currentNode;
    while (runner.next !== null) {
      if (runner.next.value === currentNode.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    currentNode = currentNode.next;
  }
  return myLinked;
}
