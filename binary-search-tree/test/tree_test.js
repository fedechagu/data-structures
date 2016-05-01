/* eslint-env mocha */
import { expect } from 'chai'
import BinarySearchTree from '../tree'
import Node from '../node'

describe('BinarySearchTree', () => {
  describe('Initialization', () => {
    it('Gets initialized with a root node', () => {
      const rootNode = new Node(10)
      const tree = new BinarySearchTree(rootNode)
      const sortedTree = [10]
      expect(tree.toArray()).to.eql(sortedTree)
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
      tree.insert(1)
      tree.insert(120)
      tree.insert(19)
      tree.insert(1)
      let sortedTree = [1, 9, 11, 12, 19, 120]
      expect(tree.toArray()).to.eql(sortedTree)
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
      let sortedTree = [1, 9, 10, 11, 12, 19, 120]
      expect(tree.toArray()).to.eql(sortedTree)
    })
  })
  describe('Search', () => {
    it('Returns true if value exists in tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(121)
      tree.insert(42)
      expect(tree.contains(42)).to.eql(true)
    })
    it('Returns false if value does not exist in tree', () => {
      const tree = new BinarySearchTree()
      tree.insert(9)
      tree.insert(11)
      tree.insert(12)
      tree.insert(8)
      tree.insert(89)
      expect(tree.contains(99).to.equal(false))
    })
  })
})
