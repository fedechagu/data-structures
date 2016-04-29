# data-structures
Data structures implemented in javascript

To run: 
``ls tree``
``npm install``
``npm run``

#Usage

##Binary Tree

```
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

```
insert(value)

search(value)

delete(value)
```
