/* eslint-env mocha */
import { expect } from 'chai'
import BinarySearchTree from '../tree'
import Node from '../node'

describe('Binary Search Tree', () => {
  describe('Initialization', () => {
    it('Gets initialized with a root node', () => {
      const rootNode = new Node(10)
      const tree = new BinarySearchTree(rootNode)
      expect(tree.length()).to.eql(1)
    })
    it('Gets initialized without a root node', () => {
      const tree = new BinarySearchTree()
      expect(tree.toArray()).to.eql([])
    })
  })
  describe('Insertion', () => {
    it('Add nodes to empty tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(120)
      tree.insert(19)
      tree.insert(1)
      expect(tree.length()).to.eql(6)
    })
    it('Add nodes to tree with root node', () => {
      const rootNode = new Node(10)
      const tree = new BinarySearchTree(rootNode)
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(1)
      tree.insert(120)
      tree.insert(19)
      tree.insert(1)
      expect(tree.length()).to.eql(7)
    })
    it('Throws exception if a non number is passed into insert()', () => {
      const tree = new BinarySearchTree()
      tree.insert('string')
      // TODO expect error
    })
  })
  describe('Searching', () => {
    it('Returns true if value exists in tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(121)
      tree.insert(42)
      expect(tree.search(9)).to.eql(true)
    })
    it('Returns false if value does not exist in tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(8)
      tree.insert(89)
      expect(tree.search(99)).to.eql(false)
    })
  })
  describe('Sorting', () => {
    it('Returns sorted values from smallest to greatest', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(121)
      tree.insert(42)
      const sortedArray = [9, 11, 12, 42, 121]
      expect(tree.toArray()).to.eql(sortedArray)
    })
    it('Returns sorted values from greatest to smallest', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(8)
      tree.insert(89)
      const inverseSortedArray = [89, 12, 11, 9, 8]
      expect(tree.toArrayInverse()).to.eql(inverseSortedArray)
    })
  })
  describe('Size', () => {
    it('Returns number of elements', () => {
      const tree = new BinarySearchTree()
      tree.insert(1)
      tree.insert(2)
      tree.insert(4)
      tree.insert(5)
      expect(tree.length()).to.eql(4)
    })
    it('Returns height of tree', () => {
      const rootNode = new Node(10)
      const tree = new BinarySearchTree(rootNode)
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(8)
      tree.insert(89)
      expect(tree.height()).to.equal(3)
    })
  })
  describe('Min/Max', () => {
    it('Returns smallest number in the tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(1)
      tree.insert(2)
      tree.insert(4)
      tree.insert(5)
      expect(tree.min()).to.eql(1)
    })
    it('Returns null for min number in an empty tree', () => {
      const tree = new BinarySearchTree()
      expect(tree.min()).to.eql(null)
    })
    it('Returns biggest number in the tree', () => {
      const rootNode = new Node(10)
      const tree = new BinarySearchTree(rootNode)
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(8)
      tree.insert(89)
      expect(tree.max()).to.eql(89)
    })
    it('Returns null for max number in an empty tree', () => {
      const tree = new BinarySearchTree()
      expect(tree.max()).to.eql(null)
    })
  })
})
