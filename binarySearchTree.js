
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
        }
}


class binarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }


    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right=== null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

        search(root,value){
            if(!root){
                return false
            }else{
                if(root.value === value){
                    return true
                }else if(value < root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right,value)
                }
            }
        }

        preOrder(root){
            if(root){
                console.log(root.value);
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }

        inOrder(root){
            if(root){
                this.inOrder(root.left)               
                console.log(root.value);
                this.inOrder(root.right)
            }
        }

        postOrder(root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value);
            }
        }


        levelOrder(){
            const queue=[]
            queue.push(this.root)
            while(queue.length){
                let curr=queue.shift()
                console.log(curr.value);
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
            }
        }


        min(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }

        max(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }

        delete(value){
            this.root=this.deleteNode(this.root,value)
        }


        deleteNode(root,value){
            if(root === null){
                return root
            }
            if(value < root.value){
                root.left=this.deleteNode(root.left,value)
            }else if(value > root.value){
                root.right=this.deleteNode(root.right,value)
            }else{
                if(!root.left && !root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }else if(!root.right){
                    return root.left
                }
                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
            }
            return root
        }
        

        isValidBST(){
            return this.checkBST(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
        }


        checkBST(node,min,max){
            if(node === null){
                return true;
            }
            if(node.value<=min || node.value>=max){
                return false
            }

            return (
                this.checkBST(node.left,min,node.value) && this.checkBST(node.right,node.value,max)
            )
        }
    }


const bst=new binarySearchTree()
console.log('tree is empty',bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)


   
// bst.preOrder(bst.root)
// console.log('inorder \n');
// bst.inOrder(bst.root)
// console.log('postOrder \n');
// bst.postOrder(bst.root)

// console.log('levelOrder \n');
// bst.levelOrder()

// bst.delete(15)
// bst.levelOrder()
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

console.log('Is BST:', bst.isValidBST());
bst.root.left.right = new Node(199);

console.log('Is BST:', bst.isValidBST()); 





// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Example binary tree
//   const root = new TreeNode(1);
//   root.left = new TreeNode(2);
//   root.right = new TreeNode(3);
//   root.left.left = new TreeNode(4);
//   root.left.right = new TreeNode(5);
//   root.right.left = new TreeNode(6);
//   root.right.right = new TreeNode(7);
//   root.right.right.right = new TreeNode(8);
  
//   // Function to find the height of a binary tree
//   function treeHeight(node) {
//     if (node === null) {
//       return 0;
//     }
  
//     const leftHeight = treeHeight(node.left);
//     const rightHeight = treeHeight(node.right);
  
//     return Math.max(leftHeight, rightHeight) + 1;
//   }
  
//   // Find and print the height of the tree
//   const height = treeHeight(root);
//   console.log('Height of the tree:', height);
  




