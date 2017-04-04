'use strict';

// import { Tree } from './helpers';


// * The prior solution can be improved upon and run in
// Time: O(N);
// Space: O(N);
/* A function that constructs Balanced Binary Search Tree
    from a sorted array */

export function main(arr) {
  if (!arr || arr.length < 1) return null;

  const tree = new BinaryTree();
  //if its only one number its a node not a tree else create tree;
  return  arr.length === 1 ? new Node(arr[0]) :
      tree.createBst(arr, 0, arr.length - 1);
  }

class Node {
  constructor(data) {
    this.val = data;
    this.left = this.right = null;
  }
}

  class BinaryTree {
  constructor() {
    this.root = null;
  }

  createBst(arr, start, end) {
    if (start > end) return null;
    const mid =  Math.floor((start + end) / 2),
                node = new Node(arr[mid]);


     node.left = this.createBst(arr, start, mid - 1);
     node.right = this.createBst(arr, mid + 1, end);
     return node;
  }
}



/**
 * As the list is already sorted the best way to create a balanced tree is by
 * adding the middle node (parent) then the children. The algorithm is basically
 * involves adding the middle element of which split of the array so that the
 * parent is added before the left and right children of each subtree.
 *
 * N = |values|
 * Time: O(N lg N)
 * Additional space: O(N)
 */
// export function makeBalancedTree(values) {
//   let tree = new Tree();
//   if (values && values.length) {
//     add(tree, values, 0, values.length - 1);
//   }
//   return tree;
// }

// function add(tree, values, start, end) {
//   if (start === end) {
//     tree.add(values[start]);
//   }
//   else if (start < end) {
//     let mid = start + Math.floor((end - start) / 2);
//     tree.add(values[mid]);
//     add(tree, values, start, mid - 1);
//     add(tree, values, mid + 1, end);
//   }
// }
