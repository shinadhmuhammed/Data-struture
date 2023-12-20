

///////////////////////////////PRIME NUMBERS///////////////////////////////////////////
// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(i=2;i<=n;i++){
//         if(n%2===0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(8))




////////////////////////////TARGET VALUE///////////////////
// function sumTotal() {
//     let arr = [3,2,5,5,6,4];
//     let total = 10;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === total) {
//                 console.log(`Numbers ${arr[i]} and ${arr[j]}`);
//             }
//         }
//     }
// }
// sumTotal()






////////////////////////////////REMOVE THE TARGET ELEMENT AT THE END OF THE ARRAY////////////////////////////////////

// function change(){
//     let arr=[5,6,9,7,6,8,6,5,6]
//     let i=0
//     let j=arr.length-1
//     let target=6
//     while(i<j){
//         while(i<j && arr[i]!==target){
//             i++;
//         }
//         while(i<j && arr[j]===target){
//             j--
//         }
//         if(i<j){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             console.log(arr);
//         }
//         i++;
//         j--;
//         }
//     }
      
// change()




/////////////////////////////////////LINKED LIST/////////////////////////////////////////


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }


// isEmpty(){
//     return this.size===0;
// }

// getSize(){
//     return this.size;
// }
// }

// const list=new LinkedList()
// console.log('List is Empty',list.isEmpty())




///////////////////////////add element at the head///////////////////////////////


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }


// isEmpty(){
//     return this.size===0;
// }

// getSize(){
//     return this.size;
// }


// prepend(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//         this.head=node;
//     }else{
//         node.next=this.head
//         this.head=node
//     }
//     this.size++
// }



// print(){
//     let curr=this.head
//     let listValue=''
//     while(curr){
//         listValue += `${curr.value} `
//         curr=curr.next
//     }
//     console.log(listValue);
    
// }
// }

// const list=new LinkedList()
// console.log('List is Empty',list.isEmpty())
// console.log('List size',list.getSize())



// list.prepend(30)
// list.prepend(50)
// list.prepend(90)
// list.print()



////////////////////////add element at the tail of linked list///////////////


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

    // append(value){
    //     let node=new Node(value);
    //     if(!this.head){
    //         this.head=node;
    //     }else{
    //     let prev=this.head
    //     while(prev.next){
    //         prev=prev.next
    //     }
    //     prev.next=node
    // }
    //     this.size++
    // }


//     prepend(value){
//         const node=new Node(value)
//         if(!this.head){
//             this.head=node;
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }




//     print(){
//         let current=this.head;
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }
//     }
// }


// const list=new LinkedList()

// list.prepend(10)
// list.prepend(40)
// list.prepend(50)
// list.print()





////////////////////////////INSERTION IN LINKED LIST /////////////////////////////////////////


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }


//     prepend(value){
//         const node=new Node(value);
//         if(!this.head){
//             this.head=node;
//         }else{
//             node.next=this.head
//             this.head=node;
//         }
//         this.size++
//     }


//     getSize(){
//     return this.size;
//   }


//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value);
//             current=current.next
//         }
//     }


//     Insert(value,index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next;
//             prev.next=node
//             this.size++
//         }
//     }
// }

// const list=new LinkedList
// list.Insert(99,0)
// list.Insert(10,1)
// list.Insert(90,2)
// list.print()
// console.log(list.getSize());


///////////////////////////LINKED LIST REMOVE////////////////////////////////




// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }


//     getSize() {
//         return this.size;
//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null;
//         }
//         let removedNode;
//         if (index === 0) {
//             removedNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }
//             removedNode = prev.next;
//             prev.next = removedNode.next;
//         }
//         this.size--;
//         return removedNode.value;
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return;
//         }
//         const node = new Node(value);
//         if (index === 0) {
//             this.prepend(value);
//         } else {
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node;
//             this.size++;
//         }
//     }
// }

// const list = new LinkedList();
// list.insert(99, 0);
// list.insert(10, 1);
// list.insert(90, 2);
// list.print();
// console.log("Size:", list.getSize());
// console.log("Removed:", list.removeFrom(2));
// console.log("Size:", list.getSize());
// list.print();




////////////////////////////////////////////DOUBLY LINKED LIST//////////////////////////////////////


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//         this.prev=null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }


//     append(data){
//         const node=new Node(data)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             node.prev=this.tail
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }


//     prepend(data){
//         const node=new Node(data)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//         }
//         this.size++;
//     }


//         insert(data,index){
//             if(index<0 || index>index.size){
//                 console.log(invalid);
//                         return;
//             }
//             const node=new Node(data)
//             if(index===0){
//                 this.prepend(data)
//             }else if(index===this.size){
//                 this.append(data)
//             }
//             else{
//                 let current=this.head;
//                 for(let i=0;i<=index-1;i++){
//                     current=current.next
//                 }
//                 node.prev=current;
//                 node.next=current.next
//                 current.next.prev=node;
//                 current.next=node;
//             }
//             this.size++;
//         }


//         deleteAtIndex(index) {
//             if (index < 0 || index >= this.size) {
//                 console.log("Invalid index");
//                 return;
//             }
//             let current = this.head;
//             for (let i = 0; i < index; i++) {
//                 current = current.next;
//             }
//             if (current.prev) {
//                 current.prev.next = current.next;
//             } else {
//                 this.head = current.next;
//             }
//             if (current.next) {
//                 current.next.prev = current.prev;
//             } else {
//                 this.tail = current.prev;
//             }
//             this.size--;
//         }


//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data);
//             current=current.next
//         }
//     }


// }
// const doublyLinkedList=new DoublyLinkedList()
// doublyLinkedList.append(10)
// doublyLinkedList.append(20)
// doublyLinkedList.append(30)
// doublyLinkedList.append(30)
// doublyLinkedList.prepend(21)

// console.log('before inserting');
// doublyLinkedList.print()

// console.log('after inserting');
// doublyLinkedList.insert(15,1)
// doublyLinkedList.print()

// console.log('After Deleting');
// doublyLinkedList.deleteAtIndex(1)
// doublyLinkedList.print()





///////////////////////////////////////////ARRAY////////////////////////////////////////////////////

// function max(nums){
//     let minimum=nums[0]
//     for(var i=1;i<=nums.length;i++){
//             if(nums[i]<minimum){
//                 minimum=nums[i]
//             }
//     }
//     return minimum
// }



// function max(nums){
//     return Math.min(...nums)
// }
// const nums=[4,2,5,6,7,9,2,1];
// console.log(max(nums));




// function max(nums){
//     return nums.sort((a,b)=>a-b)
// }
// const nums=[4,2,5,6,7,9,2,1];
// console.log(max(nums));




///////////////////////////////////////STRING////////////////////////////////////


// function reversedString(inputString){
//     let reversed=[]
//     for(var i=inputString.length-1;i>=0;i--){
//             reversed+=inputString[i]
//     }
//     return reversed
// }
// const string='shinadh'
// console.log(reversedString(string));


// function reversedString(inputString){
//     return inputString.split('').reverse().join('')
// }

// const string='shinadh muhammed'
// console.log(reversedString(string));






            // function isPalindrome(str){
            //     const cleanStr=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
            //     const reversedStr=cleanStr.split('').reverse().join('')
            //     return cleanStr===reversedStr
            // }

            // const string = 'malayalam'
            // console.log(isPalindrome(string));

         



            // function isVowels(str) {
            //     let vowels = ['a', 'e', 'i', 'o', 'u'];
            //     const string = str.toLowerCase();
            //     const vowelCount = string.split('').filter(char => vowels.includes(char)).length;
            //     return vowelCount;
            // }
            
            // const inputString = 'aeiou';
            // console.log(isVowels(inputString));
            




            // function replaceAlphabets(inputString) {
            //     let result = '';
            
            //     for (let i = 0; i < inputString.length; i++) {
            //         let char = inputString[i];
            
            //         if (char >= 'a' && char <= 'z') {
            //             char = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 3) % 26) + 'a'.charCodeAt(0));
            //         } else if (char >= 'A' && char <= 'Z') {
            //             char = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 3) % 26) + 'A'.charCodeAt(0));
            //         }
            
            //         result += char;
            //     }
            //     return result;
            // }
            
            // const inputString = 'Hello World!';
            // const shiftedString = replaceAlphabets(inputString);
            
            // console.log(`Original String: ${inputString}`);
            // console.log(`Shifted String: ${shiftedString}`);
            
            
            





//             class Node {
//                 constructor(data) {
//                     this.data = data;
//                     this.next = null;
//                 }
//             }
            
//             class SinglyLinkedList {
//                 constructor() {
//                     this.head = null;
//                     this.tail=null
//                 }
                

//                 addNodeEnd(data) {
//                     const newNode = new Node(data);
//                     if (!this.head) {
//                         this.head = newNode;
//                         this.tail=newNode
//                     } else {
//                         this.tail.next=newNode
//                         this.tail=newNode
//                     }
//                 }


//                 addNodeBegginning(data){
//                     const newNode=new Node(data)
//                     if(!this.head){
//                         this.head=newNode
//                         this.tail=newNode
//                     }else{
//                         newNode.next=this.head
//                         this.head=newNode
//                         }
//                     }
                
               
//                 findDuplicates(){
//                     let uniqueValue=new Set()
//                     let duplicateValue=new Set()
//                     let current=this.head
//                     while(current){
//                         if(uniqueValue.has(current.data)){
//                             duplicateValue.add(current.data)
//                         }else{
//                             uniqueValue.add(current.data)
//                         }
//                         current=current.next
//                     }
//                     return Array.from(duplicateValue)
//                 }

//                 removeDuplicates(){
//                     let current=this.head
//                     while(current && current.next){
//                         if(current.data === current.next.data){
//                             current.next=current.next.next
//                         }else{
//                             current=current.next
//                         }
//                     }
//                 }
//                 print(){
//                     let current=this.head
//                     while(current){
//                         console.log(current.data);
//                         current=current.next
//                     }
//                 }


//             }
            

//             const singlyList = new SinglyLinkedList();
// singlyList.addNodeEnd(1);
// singlyList.addNodeEnd(2);
// singlyList.addNodeEnd(3);
// singlyList.addNodeEnd(2);
// singlyList.addNodeEnd(4);
// singlyList.addNodeBegginning(4);

// console.log("Original List:");
// singlyList.print();

// const duplicates = singlyList.findDuplicates();
// console.log('Duplicate values:', duplicates);

// // Call the removeDuplicates method directly
// singlyList.removeDuplicates();

// console.log("\nList after Removing Duplicates:");
// singlyList.print();

        
/////////////////////////////////////////remove duplicate in sorted array////////////////////////////


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

    
//     addNode(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.size++
//     }

//     addNodeBeginning(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             newNode.next=this.head
//             this.head=newNode
//         }
//         this.size++
//     }

//     removeDuplicates(){
//         let current=this.head
//         while(current && current.next){
//             if(current.data === current.next.data){
//                 current.next=current.next.next
//             }else{
//                 current=current.next
//             }
//         }
//     }


//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }

// }

// const newList=new LinkedList()

// newList.addNode(1)
// newList.addNode(2)
// newList.addNode(3)
// newList.addNodeBeginning(10)
// newList.addNodeBeginning(20)
// newList.addNodeBeginning(30)
// newList.addNodeBeginning(30)
// newList.print()
   
// console.log('after removing duplicat');
// newList.removeDuplicates()
// newList.print()


////////////////////////////////////////reverse using linked list/////////////////////////////



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

    

//     addNode(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     reverseList(){
//     let next=null
//     let prev=null
//     let current=this.head
//     while(current){
//         next=current.next
//         current.next=prev
//         prev=current
//         current=next
//     }
//     this.head=prev
//     }



        

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }


// const linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(3);
// linkedList.addNode(2);

// console.log("Original List:");
// linkedList.print();

// linkedList.reverseList();

// console.log("\nReversed List:");
// linkedList.print();









// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     addNode(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     reverseList() {
//         let next = null;
//         let prev = null;
//         let current = this.head;
//         while (current) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }



//         insertAt(data,position){
//             if(position<0 && position>position.length){
//                 console.log('invalid position');
//                 return
//             }

//             const newNode=new Node(data)
//                 if(position===0){
//                     newNode.next=this.head
//                     this.head=newNode
//                 }else{
//                     let current = this.head
//                     let count=0
//                     let prev=null
//                     while(count<position){
//                         prev=current
//                         current=current.next
//                         count++
//                     }
//                     newNode.next=current
//                     prev.next=newNode
//                 }
//                 this.size++
//             }
            
            

//             deletePosition(position){
//                 if(position<0 || position>this.size){
//                     console.log('invalid')
//                     return
//                 }
//                 let current=this.head
//                 let prev=null
//                 let count=0
//                 if(position==0){
//                     this.head=current.next
//                 }else{
//                     while(count<position){
//                         prev=current
//                         current=current.next
//                         count++
//                 }
//                 prev.next=current.next
//             }
//             this.size--
//         }
          

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(3);
// linkedList.addNode(2);

// console.log("Original List:");
// linkedList.print();

// linkedList.reverseList();

// console.log("\nReversed List:");
// linkedList.print();


// linkedList.insertAt(9, 1);

// console.log("\nList after inserting at position 1:");
// linkedList.print();



// console.log('delete from the position')
// linkedList.deletePosition(2)
// linkedList.print()







// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     addNode(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//     }

//     addNodeBeginning(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             newNode.next=this.head
//             this.head=newNode
//         }
//     }

//     Insert(data,position){
//         if(data<0 && data>position.length){
//             console.log('invalid');
//             return
//         }
//         const newNode=new Node(data)
//         if(position===0){
//             newNode.next=this.head
//             this.head=newNode
//         }else{
//             let current=this.head
//             let prev=null
//             let count=0
        
//         while(count<position){
//             prev=current
//             current=current.next
//             count++
//         }
//         newNode.next=current
//         prev.next=newNode
//     }
//     this.size++
//     }


//     delete(position){
//         if(position<0 || position>position.length){
//             console.log('invalid ');
//             return
//         }
//         let current=this.head
//         let prev=null
//         let count=0
//         if(position==0){
//             this.head=current.next
//         }else{
//             while(count<position){
//                 prev=current
//                 current=current.next
//                 count++
//             }
//             prev.next=current.next
//         }
//         this.size--
//     }


//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }
  

// const newLinkedlist=new LinkedList()

// newLinkedlist.addNode(1)
// newLinkedlist.addNode(2)
// newLinkedlist.addNode(3)
// newLinkedlist.addNodeBeginning(20)
// newLinkedlist.addNodeBeginning(30)
// newLinkedlist.addNodeBeginning(40)
// newLinkedlist.print()

// console.log('after inserting\n');

// newLinkedlist.Insert(10,2)
// newLinkedlist.Insert(15,3)
// newLinkedlist.print()

// console.log('after deleting\n');
// newLinkedlist.delete(2)
// newLinkedlist.print()









// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//     }

//     arrayToLinkedlist(arr){
//         const linkedList=new LinkedList()
//         for(const item of arr){
//             linkedList.append(item)
//         }
//         return linkedList
//     }


//     Insert(data,index){
//         if(index<0 || index>index.length){
//             console.log('invalid');
//             return
//         }
//         const newNode=new Node(data)
//         if(index===0){
//             newNode.next=this.head
//             this.head=newNode
//         }else{
//             let current=this.head
//             let prev=null
//             let count=0
//             while(count<index){
//                 prev=current
//                 current=current.next
//                 count++
//             }
//             newNode.next=current
//             prev.next=newNode
//         }
//         this.size++
//     }

//     delete(index){
//         if(index<0 || index<index.length){
//             console.log('invalid');
//             return
//         }
//             let current=this.head
//             let prev=null
//             let count=0
//             if(index==0){
//                 this.head=current.next
//             }else{
//             while(count<index){
//                 prev=current
//                 current=current.next
//                 count++
//             }
//             prev.next=current.next
//         }
//         this.size--
//     }

//     search(value){
//         let current=this.head
//         while(current){
//             if(current.data===value){
//                 return true
//             }
//             current=current.next
//         }
//     }


//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// let newLinkedlist=new LinkedList()
// newLinkedlist.append(1)
// newLinkedlist.append(2)
// newLinkedlist.append(3)
// newLinkedlist.print()
// const array = [1, 2, 3, 4, 5];
// const linkedList = newLinkedlist.arrayToLinkedlist(array);
// console.log(linkedList);

// newLinkedlist.Insert(10,2)
// newLinkedlist.Insert(20,1)
// newLinkedlist.print()
// console.log('after deleting');
// newLinkedlist.delete(4)
// newLinkedlist.print()

// const searchValue = 3;
// if (linkedList.search(searchValue)) {
//   console.log(`${searchValue} found in the linked list.`);
// } else {
//   console.log(`${searchValue} not found in the linked list.`);
// }










// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.size ++
//     }

//     search(value){
//         let current=this.head
//         while(current){
//             if(current.data===value){
//                 return true
//             }
//             current=current.next
//         }
//         return false
//     }



//     prepend(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             newNode.next=this.head
//             this.head=newNode
//         }
//         this.size ++
//     }

//     insert(data,index){
//         if(index < 0 || index >=this.size){
//             console.log('invalid')
//             return
//         }
//         const newNode=new Node(data)
//         if(index===0){
//             newNode.next=this.head
//             this.head=newNode
//         }else{
//             let current=this.head
//             let prev=null
//             let count=0
//             while(count<index){
//                 prev=current
//                 current=current.next
//                 count++
//             }
//           newNode.next=current
//           prev.next=newNode
//         }
//     }

//         delete(index){
//             if(index<0 || index >= this.size){
//                 console.log('invalid');
//                 return
//             }
//             let current=this.head
//             let prev=null
//             let count=0
//             if(index ==0){
//                 this.head=current.next
//             }else{
//                 while(count<index){
//                     prev=current
//                     current=current.next
//                     count++
//                 }
//                 prev.next=current.next
//             }
//             this.size --
//         }

//         deleteDuplicate() {
//             let current = this.head;
//             while (current && current.next) {
//                 if (current.data === current.next.data) {
//                     current.next = current.next.next;
//                     this.size--; 
//                 } else {
//                     current = current.next;
//                 }
//             }
//         }

//         arrayToLinkedlist(arr) {
//             const linkedList = new LinkedList();
//             for (const item of arr) {
//                 linkedList.append(item);
//             }
//             return linkedList;
//         }





//         findDuplicates(){
//             let uniqueValue=new Set()
//             let duplicate=new Set()
//             let current=this.head
//             while(current){
//                 if(uniqueValue.has(current.data)){
//                     duplicate.add(current.data)
//                 }else{
//                     uniqueValue.add(current.data)
//                 }
//                 current=current.next
//             }
//             return Array.from(duplicate)
//         }
        



//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// const newLinkedList = new LinkedList();
// newLinkedList.append(1);
// newLinkedList.append(2);
// newLinkedList.append(3);
// newLinkedList.prepend(10);
// newLinkedList.prepend(10);
// newLinkedList.prepend(20);
// newLinkedList.prepend(30);
// newLinkedList.print();
// console.log('after inserting');
// newLinkedList.insert(100, 2);
// newLinkedList.print();
// console.log('after deleting');
// newLinkedList.delete(2);
// newLinkedList.print();

// const duplicates = newLinkedList.findDuplicates();
// console.log('duplicates', duplicates);

// // Convert an array to a linked list
// const array = [5, 6, 7, 8];
// const linkedListFromArray = newLinkedList.arrayToLinkedlist(array);
// console.log('Linked List from Array:');
// linkedListFromArray.print();

// const searchValue = 0;
// const found = newLinkedList.search(searchValue);
// console.log(found);





















class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size ++
    }


    prepend(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.size++
    }


    Insert(data,index){
        if(index<0 || index>=this.size){
            console.log('invalid');
            return
        }
        const newNode=new Node(data)
        if(index === 0){
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }else{
            let current=this.head
            let prev=null
            let count=0
            while(count < index){
                prev=current
                current=current.next
                count++
            }
            newNode.next=current
            newNode.prev=prev
            prev.next=newNode
            if(current){
                current.prev=newNode
            }
        }
        this.size++
    }

    delete(index){
        if(index <0 || index >=this.size){
            console.log('invalid');
            return
        }
        let current=this.head
        let prev=null
        let count=0
        if(index===0){
            this.head=current.next
        }else{
            while(count<index){
                prev=current
                current=current.next
                count ++
            }
            prev.next=current.next
            if(current.next){
                current.next.prev=prev
            }else{
                this.tail=prev
            }
        }
        this.size --
    }

        search(value){
            let current=this.head
            while(current){
                if(current.data === value){
                    return true
                }
                current=current.next
            }
            return false
        }

    print(){
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
    printReverse(){
        let current=this.tail
        while(current){
            console.log(current.data)
            current=current.prev;
        }
    }
}

const newDoubleLinkedList=new DoublyLinkedList()
newDoubleLinkedList.append(1)
newDoubleLinkedList.append(2)
newDoubleLinkedList.append(3)

newDoubleLinkedList.prepend(20)
newDoubleLinkedList.prepend(30)
newDoubleLinkedList.prepend(40)
newDoubleLinkedList.print()
console.log('after inserting');
newDoubleLinkedList.Insert(10,2)
newDoubleLinkedList.printReverse()

console.log('deleting')
newDoubleLinkedList.delete(2)
newDoubleLinkedList.print()


const search=300
const found=newDoubleLinkedList.search(search)
console.log('search value is',found)
