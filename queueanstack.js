//////////////////////////////////////queue/////////////////////////////////////////////
   
        //     class Queue{
        //         constructor(){
        //             this.items=[]
        //         }
            

        //     enqueue(Element){
        //         this.items.push(Element)
        //     }

        //     dequeue(){
        //         return this.items.shift()
        //     }
            
        //     isEmpty(){
        //         return this.items.length===0
        //     }

        //     print(){
        //         console.log(this.items.toString())
        //     }

        //     size(){
        //         return this.items.length
        //     }
        //     peek(){
        //         if(!this.isEmpty()){
        //             return this.items[0]
        //         }
        //         return null
        //     }
        // }
            

        //     const queue=new Queue()
        //     console.log(queue.isEmpty())
        //     queue.enqueue(900)
        //     queue.enqueue(20)
        //     queue.enqueue(30)
        //     queue.print()
        //     console.log('Size of the queue:', queue.size())

        //     console.log('after dequeuing');
        //     queue.dequeue()
        //     queue.print()

           
           


        //     const peekedElement=queue.peek()
        //     console.log('peeked element',peekedElement);




//////////////////////////////////////HASH TABLE///////////////////////////////////////////////////


        // class HashTable{
        //         constructor(size){
        //                 this.table=new Array(size)
        //                 this.size=size
        //         }

        //         hash(key){
        //                 let total=0
        //                 for(let i=0;i<key.length;i++){
        //                         total += key.charCodeAt(i);
        //                 }
        //                 return total % this.size
        //         }


        //         set(key,value){
        //                 const index=this.hash(key)
        //                 this.table[index]=value
        //         }


        //         get(key){
        //                 const index=this.hash(key)
        //                 return this.table[index]
        //         }


        //         remove(key){
        //                 const index=this.hash(key)
        //                 this.table[index]=undefined
        //         }

        //         display(){
        //                 for(let i=0;i<this.table.length;i++){
        //                         if(this.table[i]){
        //                                 console.log(i,this.table[i]);
        //                         }
        //                 }
        //         }
        // }

        // const table=new HashTable(50)
        // table.set('name','shinadh')
        // table.set('age',15)
        // table.display()

        // console.log('After getting');
        // console.log(table.get('name'))
        // console.log(table.get('age'))
        // console.log('after removing');
        // table.remove('age')
        // table.display()



        ///////////////////////////////////////////STACK///////////////////////////////////////////////////////

        // class Stack{
        //         constructor(){
        //                 this.items=[]
        //         }

        //         push(element){
        //                 this.items.push(element)
        //         }

        //         pop(){
        //                 if (this.items.length===0){
        //                         return 'Underflow'
        //                 }
        //                 return this.items.pop()
        //         }


        //         peek(){
        //                 return this.items[this.items.length-1]
        //         }

        //         isEmpty(){
        //                 return this.items.length === 0
        //         }
        //         size(){
        //                 return this.items.length
        //         }
        //         print(){
        //                 console.log(this.items);
        //         }
        // }

        // const newstack=new Stack()

        // newstack.push(1)
        // newstack.push(2)
        // newstack.push(3)
        // newstack.print()
        // console.log(newstack.peek());
        // console.log(newstack.pop());
        // console.log(newstack.size());
        // newstack.print()




        // class Stack{
        //         constructor(){
        //                 this.items=[]
        //                 this.minStack=[]
        //                 this.maxStack=[]
        //         }

        //         push(elements){
        //                 this.items.push(elements);
        //                 if(this.minStack.length===0 || elements <= this.minStack[this.minStack.length-1]){
        //                          this.minStack.push(elements)
        //                 }
        //                 if (this.maxStack.length === 0 || elements >= this.maxStack[this.maxStack.length - 1]) {
        //                         this.maxStack.push(elements);
        //                     }
        //         }

        //         pop(){
        //                 if(this.items.length==0){
        //                         return 'underflow'
        //                 }
        //                 return this.items.pop()
        //         }

        //         peek(){
        //                 return this.items[this.items.length-1]
        //         }

        //         getMinimum(){
        //                 if(this.minStack.length==0){
        //                         return 'stack is empty'
        //                 } 
        //                 return this.minStack[this.minStack.length - 1]
        //         }

        //         getMaximum(){
        //                 if(this.maxStack.length===0){
        //                         return 'stack is empty'
        //                 }
        //                 return this.maxStack[this.maxStack.length-1]
        //         }

        //         isEmpty(){
        //                 return this.items.length===0
        //         }
        //         size(){
        //                 return this.items.length
        //         }
        //         print(){
        //                 console.log(this.items);
        //         }
        // }

        // const newstack=new Stack()
        // newstack.push(10)
        // newstack.push(2)
        // newstack.push(3)
        // newstack.print()
        // console.log('size is',newstack.size());
        // console.log('peek',newstack.peek());
        // console.log('minimum is', newstack.getMinimum()); 
        // console.log('maximum is', newstack.getMaximum()); 






        // class Queue{
        //         constructor(){
        //                 this.items=[]
        //         }

        //         enqueue(element){
        //                 this.items.push(element)
        //         }

        //         dequeue(){
        //                 this.items.shift()
        //         }

        //         isSize(){
        //                return this.items.length
        //         }
        //         isEmpty(){
        //                 return this.items.length===0
        //         }
        //         print(){
        //                 console.log(this.items);
        //         }
        // } 

        // const newQueue=new Queue()
        //         newQueue.enqueue(1)
        //         newQueue.enqueue(2)
        //         newQueue.enqueue(3)
        //         newQueue.print()

        //         newQueue.dequeue()
        //         newQueue.print()

        //         console.log('size is',newQueue.isSize());
        //         console.log('empty',newQueue.isEmpty());





        // class HashTable{
        //         constructor(size){
        //                 this.table=new Array(size)
        //                 this.size=size
        //         }

        //         hash(key){
        //                 let total=0
        //                 for(var i=0;i<key.length;i++){
        //                         total+=key.charCodeAt(i)
        //                 }
        //                 return total % this.size
        //         }

                
        //         set(key,value){
        //                 const index=this.hash(key)
        //                const bucket=this.table[index]
        //                 if(!bucket){
        //                         this.table[index]=[[key,value]]
        //                 }else{
        //                 const samekeyitem=bucket.find(item => item[0] === key)
        //                 if(samekeyitem){
        //                         samekeyitem[1]=value
        //                 }else{
        //                         bucket.push([key,value])
        //                 }
        //                 }
        //         }


        //         get(key){
        //                 const index=this.hash(key)
        //                 const bucket=this.table[index]
        //                 if(bucket){
        //                         const samekeyitem=bucket.find(item => item[0]===key)
        //                         if(samekeyitem){
        //                                 return samekeyitem[1]
        //                         }
        //                 }
        //                 return undefined
                                
        //         }

        //         remove(key){
        //                 const index=this.hash(key)
        //                 const bucket=this.table[index]
        //                 if(bucket){
        //                         const samekeyitem=bucket.find(item => item[0] === key)
        //                         if(samekeyitem){
        //                                 bucket.splice(bucket.indexOf(samekeyitem),1)
        //                         }
        //                 }
        //         }


        //         display(){
        //                 for(let i=0;i<this.table.length;i++){
        //                         if(this.table[i]){
        //                                 console.log(i,this.table[i]);
        //                         }
        //                 }
        //         }
        // }


        // const table=new HashTable(50)
        // table.set('name','shinadh')
        // table.set('mane','ajmal')
        // table.set('age','15')
        // table.display()

        // // table.remove('age')
        // // table.display()

        // console.log('after get the key');
        // console.log(table.get('mane')); 
        // // table.display();




        // class HashTable{
        //         constructor(size){
        //                 this.table=new Array(size)
        //                 this.size=size
        //         }

        //         hash(key){
        //                 let total=0;
        //                 for(let i=0;i<key.length;i++){
        //                         total+=key.charCodeAt(i)
        //                 }
        //                 return total % this.size
        //         }

        //         set(key,value){
        //                 const index=this.hash(key)
        //                 const bucket=this.table[index]
        //                 if(!bucket){
        //                        this.table[index]=[[key,value]] 
        //                 }else{
        //                         const samekeyitem=bucket.find(item => item[0]===key)
        //                         if(samekeyitem){
        //                                 samekeyitem[1]=value
        //                         }else{
        //                                 bucket.push([key,value])
        //                         }
        //                 }
        //         }

        //         get(key){
        //                 const index=this.hash(key)
        //                 return this.table[index]
        //         }

        //         remove(){
        //                 const index=this.hash(key)
        //                 this.table[index]=undefined
        //         }

        //         display(){
        //                 for(let i=0;i<this.table.length;i++){
        //                         if(this.table[i]){
        //                                 console.log(i,this.table[i]);
        //                         }
        //                 }
        //         }
        // }

        // const table=new HashTable(50)
        // table.set('name','shinadh')
        // table.set('mane','ajmal')
        // table.set('age',17)
        // table.display()
        // console.log(table.get('age'))
        





        // class HashTable{
        //         constructor(size){
        //                 this.items=new Array(size)
        //                 this.size=size
        //         }


        //         hash(key){
        //                 let total=0;
        //                 for(var i=0;i<key.length;i++){
        //                         total += key.charCodeAt(i)
        //                 }
        //                 return total%this.size
        //         }


        //         set(key,value){
        //                 const index=this.hash(key)
        //                 const bucket=this.items[index]
        //                 if(!bucket){
        //                         this.items[index]=[[key,value]]
        //                 }else{
        //                         const samekeyitem=bucket.find(item => item[0] === key)
        //                         if(samekeyitem){
        //                                 samekeyitem[1]=value
        //                         }else{
        //                                 bucket.push([key,value])
        //                         }
        //                 }
        //         }

        //         get(key){
        //                 const index=this.hash(key)
        //                 return this.items[index]
        //         }
        //         remove(key){
        //                 const index=this.hash(key)
        //                 this.items[index]=undefined
        //         }
        //         print(){
        //                 for(var i=0;i<this.items.length;i++){
        //                         if(this.items[i]){
        //                                 console.log(i,this.items[i]);
        //                         }
        //                 }
        //         }
        // }

        // const newhash=new HashTable(50)
        // newhash.set('name','shinadh')
        // newhash.set('mane','ajmal')
        // newhash.print()
        // console.log(newhash.get('mane'));




        






