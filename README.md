# data-structures
Data structures implemented in javascript

#Usage

##Binary Search Tree

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

##API

### Insert
####Insert value into tree
##### Complexity: O(log N)

```javascript
tree.insert(value)
```

### Search
####Search for value in tree. Returns true or false
##### Complexity: O(log N)

```javascript
tree.search(value)
```

###Traversal
####Traverse tree in order and execute a callback function on every node
##### Complexity: O(N)
```javascript
tree.traverseInOrder((value) => {

})
```

###Height
####Returns height of tree
##### Complexity: O(N)
```javascript
tree.height()
```

###Length
####Returns number of nodes in the tree
##### Complexity: O(N)
```javascript
tree.length()
```

###To String
####Stringify tree
##### Complexity: O(1)
```javascript
tree.toString()
```

###To Array
####Returns an ordered array representing the tree
##### Complexity: O(N)
```javascript
tree.toArray()
```

###To Array Inverse
####Returns an ordered array representing the tree in reverse order
##### Complexity: O(N)
```javascript
tree.toArrayInverse()
```

###Min
####Returns min vaue
##### Complexity: O(log N)
```javascript
tree.min()
```

###Max
####Returns max vaue
##### Complexity: O(log N)
```javascript
tree.max()
```
