class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export default class BinaryTree {
    constructor(arr) {
        this.root = null;//树根
        if(typeof tree === 'number') {
            this.insert(arr);
        } else if(Array.isArray(tree)) {
            this.insertAll(arr);
        } else {
            throw new Error('请输入Number类型或者Array类型的参数')
        }
    }
    insert(value) {
        let node = new Node(value);
        if(!this.root) {
            return this.root = node;
        }
        function _insert(root, node) {
            if(node.value < root.value) {
                if(!this.root.left) {
                    this.root.left = node;
                } else {
                    _insert( this.root.left, node)
                }
            } else {
                if(!this.root.right) {
                    this.root.right = node;
                } else {
                    _insert( this.root.right, node)
                }
            }
        }
        _insert(this.root, node)
    }
    insertAll(arr) {
        arr.forEach(element => {
            this.insert(element);
        });
    }
    showTree () {
        //返回二叉树对象
        return this.root;
    }

    search(value) {
        function searchNode(root, value) {
            if(root === null) {
                return false;
            }
            if(value < root.value) {
                return searchNode(root.left, value);
            } else if(value > root.value) {
                return searchNode(root.right, value);
            } else {
                return true;
            }
        }
        return searchNode(this.root, value)
    } 
    

    isSymmetrical() {
        if(!this.root) {
            return true;
        }
        function fun(left, right) {
            if(!left) {
                return right === null;
            }
            if(!right) {
                
            }
        }
    }

    reverseTree(root) {
        if(!root) {
            [root.left, root.right] = [root.right, root.left];
            reverseTree(root.left);
            reverseTree(root.right);
        }
    }

    remove(value) {
        function remove(root, value) {

        }
    }

}