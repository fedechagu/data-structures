# data-structures
Data structures implemented in javascript

#Usage

##Binary Tree

```javascript
import Tree from './tree'
import Node from './node'

// Create root node
const rootNode = new Node(10)

// Initialize tree with root node
const tree = new Tree(rootNode)

// Can also be initialized without a root node, first value inserted will become root
const tree2 = new Tree()

tree.insert(11)

tree.search(11)

tree.height()


```

###API

####Insert value into tree O(log N) 
```javascript
tree.insert(value)
```

####Search for value in tree. Returns true or false O(log N) 
```javascript
tree.search(value)
```

####Returns max height of tree O(N) 
```javascript
tree.height()
```

####Returns number of nodes in the tree O(N) 
```javascript
tree.length()
```

####Stringify tree O(1) 
```javascript
tree.toString()
```

####Returns an ordered array representing the tree O(N) 
```javascript
tree.toArray()
```

####Returns an ordered array representing the tree in reverse order O(N) 
```javascript
tree.toArrayInverse()
```

####Returns min vaue O(log N) 
```javascript
tree.min()
```

####Returns max vaue O(log N) 
```javascript
tree.max()
```
