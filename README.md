# data-structures
Data structures implemented in javascript

To run: 
``ls tree``
``npm install``
``npm run``

#Usage

##Binary Tree

```javascript
import Tree from './tree'
import Node from './node'

// Create root node
const rootNode = new Node(10)

// Initialize tree with root node
const tree = new Tree(rootNode)

tree.insert(11)

tree.search(11)

tree.delete(11)

```

###API

```javascript
tree.insert(value)

tree.search(value)

tree.delete(value)
```
