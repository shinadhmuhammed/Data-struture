

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }



    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size ++
    }





    arrayToLinked(arr){
        const linkedlist=new LinkedList()
        for(const item of arr){
            linkedlist.append(item)
        }
        return linkedlist
    }

    print(){
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}



const newLinkedList=new LinkedList()
newLinkedList.append(2)
newLinkedList.print()

const array=[6,3,2,6,7]
const arraytolinked= new LinkedList()
const linkedlist=arraytolinked.arrayToLinked(array)
console.log(linkedlist);