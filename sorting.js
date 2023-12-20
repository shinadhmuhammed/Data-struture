////////////////////////////////////////BUBBLE SORT//////////////////////////////

            // function bubbleSort(arr){
            //     let len=arr.length-1
            //     let swapped;
            //     do{
            //         swapped=false
            //         for(var i=0;i<=len-1;i++){
            //             if(arr[i]>arr[i+1]){
            //                 temp=arr[i]
            //                 arr[i]=arr[i+1]
            //                 arr[i+1]=temp
            //                 swapped=true
            //             }
            //         }
            //     }while(swapped)
            //     return arr
            // }
        

            // const array=[3,2,6,4,0,1]
            // const sortedarray=bubbleSort(array)
            // console.log(sortedarray);




            ///////////////////////////insertion sort//////////////////////////////////////


                // function insertion(arr){
                //     for(var i=1;i< arr.length;i++){
                //         let numbertoinsert=arr[i]
                //         let j=i-1
                //         while(j>=0 && arr[j]>numbertoinsert){
                //             arr[j+1]=arr[j]
                //             j=j-1 
                //         }
                //         arr[j+1]=numbertoinsert
                //     }
                // }

                // const array=[9,3,2,4,3]
                // insertion(array)
                // console.log(array);
            


            ///////////////////////////////////quick sort//////////////////////////////////////


            // function quickSort(arr){
            //     if(arr.length<2){
            //         return arr
            //     }
            //     let pivot=arr[arr.length-1]
            //     let left=[]
            //     let right=[]
            //     for(let i=0;i<arr.length-1;i++){
            //         if(arr[i]>pivot){
            //             right.push(arr[i])
            //         }else{
            //             left.push(arr[i])
            //         }
            //     }
            //     return [...quickSort(left),pivot,...quickSort(right)]
            // }

            // const array=[2,1,45,25,10]
            // console.log(quickSort(array));









////////////////////////////////////////Merge Sort //////////////////////////////////////////////

        //     function mergeSort(arr){
        //         if(arr.length < 2){
        //             return arr
        //         }
        //         const mid=Math.floor(arr.length/2)
        //         const leftarr=arr.slice(0,mid)
        //         const rightarr=arr.slice(mid)
        //         return merge(mergeSort(leftarr),mergeSort(rightarr))
        //     }

        //     function merge(leftarr,rightarr){
        //         const sortedarray=[]
        //         while(leftarr.length && rightarr.length){
        //             if(leftarr[0]<rightarr[0]){
        //                 sortedarray.push(leftarr.shift())
        //             }else{
        //                 sortedarray.push(rightarr.shift())
        //             }
        //         }
        //         return [...sortedarray,...leftarr,...rightarr]
        //     }



        //     const array=[1,4,3,90,10]
        //    console.log(mergeSort(array));


           
  /////////////////////////////////////////////////selection sort/////////////////////////////////////////////////////


                        // function selectionSort(arr){
                        //     let n=arr.length

                        //     for(var i=0;i<n-1;i++){
                        //         let minIndex=i
                        //         for(var j=i+1;j<n;j++){
                        //             if(arr[j]<arr[minIndex]){
                        //                 minIndex=j
                        //             }
                        //         }

                        //         if(minIndex !== i){
                        //             [arr[i],arr[minIndex]]= [arr[minIndex],arr[i]]
                        //         }
                        //     }
                        //     return arr
                        // }


                        // const unsortedArray=[3,2,1,7,5,8]
                        // const sortedarray=selectionSort(unsortedArray)
                        // console.log(sortedarray);




                        // function selectionSort(arr){
                        //     for(var i=0;i<arr.length-1;i++){
                        //         let minIndex=i
                        //         for(var j=i+1;j<arr.length;j++){
                        //                 if(arr[j]<arr[minIndex]){
                        //                 minIndex=j
                        //                 }
                        //         }
                        //         if(minIndex !== i){
                        //             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
                        //         }
                        //     }
                        //     return arr
                        // }

                        // const array=[6,3,8,9,2,10]
                        // const sortedarray=selectionSort(array)
                        // console.log(sortedarray);


        ///////////////////////////////////practice////////////////////////////////////////

                    // function bubbleSort(arr){
                    //     let swapped;
                    //     do{
                    //         swapped=false
                    //         for(var i=0;i<=arr.length-1;i++){
                    //             if(arr[i]>arr[i+1]){
                    //                 temp=arr[i]
                    //                 arr[i]=arr[i+1]
                    //                 arr[i+1]=temp
                    //                 swapped=true
                    //             }
                    //         }
                    //     }
                    //     while(swapped)
                    //                 return arr

                    // }

                    // const arr=[8,3,6,2,10,24]
                    // console.log(bubbleSort(arr));




                    // function insertionSort(arr){
                    //     for(var i=1;i<arr.length;i++){
                    //         let valuetoinsert=arr[i]
                    //         j=i-1
                    //         while(j>=0 && arr[j]>valuetoinsert ){
                    //             arr[j+1]=arr[j]
                    //             j=j-1
                    //         }
                    //         arr[j+1]=valuetoinsert
                    //     }
                    //     return arr
                    // }


                    // const arr=[100,3,7,5,9,1]
                    // console.log(insertionSort(arr));





                    // function quickSort(arr){
                    //     if(arr.length<2){
                    //         return arr
                    //     }
                    //     let pivot=arr[arr.length-1]
                    //     let left=[]
                    //     let right=[]
                    //     for(var i=0;i<arr.length-1;i++){
                    //         if(arr[i]>pivot){
                    //             right.push(arr[i])
                    //         }else{
                    //             left.push(arr[i])
                    //         }
                    //     }
                    //     return [...quickSort(left),pivot,...quickSort(right)]
                    // }

                    // const array=[6,3,2,7,9,10]
                    // console.log(quickSort(array));




                    // function mergeSort(arr){
                    //     if(arr.length<2){
                    //         return arr
                    //     }
                    //     let mid=Math.floor(arr.length/2)
                    //     let left=arr.slice(0,mid)
                    //     let right=arr.slice(mid)
                    //     return merge(mergeSort(left),mergeSort(right))
                    // }

                    // function merge(left,right){
                    //     const sortedarray=[]
                    //     while(left.length && right.length){
                    //         if(left[0]<right[0]){
                    //             sortedarray.push(left.shift())
                    //         }else{
                    //             sortedarray.push(right.shift())
                    //         }
                    //     }   
                    //     return [...sortedarray,...left,...right]
                    // }

                    // const arr=[5,2,4,9,7,10]
                    // console.log(mergeSort(arr));




                    // function selectionSort(arr){
                    //     for(var i=0;i<=arr.length-1;i++){
                    //         let minIndex=i
                    //         for(var j=i+1;j<=arr.length;j++){
                    //             if(arr[j]<arr[minIndex]){
                    //                 minIndex=j
                    //             }
                    //         }
                    //         [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
                    //     }   
                    //     return arr
                    // }

                    // const array=[5,3,7,2,8,2]
                    // console.log(selectionSort(array));






                    // class Stack{
                    //     constructor(){
                    //         this.items=[]
                    //         this.minStack=[]
                    //     }

                    //     push(element){
                    //         this.items.push(element)
                    //         if(this.minStack.length === 0 || element <= this.minStack[this.minStack.length-1]){
                    //             this.minStack.push(element)
                    //         }
                    //     }

                    //     pop(){
                    //         if(!this.items.length){
                    //             return 'Underflow'
                    //         }
                    //         return this.items.pop()
                    //     }
                    //     peek(){
                    //         return this.items[this.items.length-1]
                    //     }

                    //     isEmpty(){
                    //         return this.items.length===0
                    //     }
                    //     size(){
                    //         return this.items.length
                    //     }
                    //     print(){
                    //         console.log(this.items);
                    //     }
                    //     getMin(){
                    //         return this.minStack[this.minStack.length-1]
                    //     }
                    // }


                    // const newStack=new Stack()
                    // newStack.push(2)
                    // newStack.push(1)
                    // newStack.push(4)
                    // newStack.print()
                    // newStack.pop()
                    // newStack.print()
                    // console.log('size is',newStack.size());
                    // console.log('peek element is',newStack.peek());
                    // console.log('minimum element is',newStack.getMin());




                //     class Queue{
                //         constructor(){
                //             this.items=[]
                //         }

                //         enqueue(element){
                //             this.items.push(element)
                //         }
                //         dequeue(){
                //             if(!this.items){
                //                 return 'undefined'
                //             }else{
                //                 return this.items.shift()
                //             }
                //         }
                //         peek(){
                //             if(!this.items){
                //                 return 'queue is empty'
                //             }else{
                //                return this.items[0]
                //             }
                //         }
                //         print(){
                //             console.log(this.items);
                //         }
                //     }

                //     const newQueue=new Queue()
                //     newQueue.enqueue(2)
                //     newQueue.enqueue(5)
                //     newQueue.enqueue(1)
                //     newQueue.print()
                //     newQueue.dequeue()
                //     newQueue.print()
                //    console.log('peek element is',newQueue.peek());





                //   class Dqueue{
                //     constructor(){
                //         this.items=[]
                //     }

                //     addFront(element){
                //         this.items.unshift(element)
                //     }

                //     addrear(element){
                //         this.items.push(element)
                //     }

                //     removefront(){
                //         return this.items.shift()
                //     }

                //     removerear(){
                //         return this.items.pop()
                //     }
                //     front(){
                //         if(!this.items.length){
                //             return 'dqueue is empty'
                //         }else{
                //             return this.items[0]
                //         }
                //     }
                //     rear(){
                //         return this.items[this.items.length-1]
                //     }
                //     print(){
                //         console.log(this.items);
                //     }
                //   }


                //   const newdeque=new Dqueue()
                //   newdeque.addFront(1)
                //   newdeque.addFront(2)
                //   newdeque.addFront(3)
                //   newdeque.print()

                //   newdeque.addrear(9)
                //   newdeque.addrear(10)
                //   newdeque.addrear(12)
                //   newdeque.print()



























                    // function quickSort(arr){
                    //     if(arr.length<1){
                    //         return arr
                    //     }
                    //     let pivot=arr[arr.length-1]
                    //     let left=[]
                    //     let right=[]
                    //     for(var i=0;i<arr.length-1;i++){
                    //         if(arr[i]<pivot){
                    //             left.push(arr[i])
                    //         }else{
                    //             right.push(arr[i])
                    //         }
                    //     }
                    //     return [...quickSort(left),pivot,...quickSort(right)]
                    // }

                    // const array=[4,3,7,9,2,1]
                    // console.log(quickSort(array));



                    function mergeSort(arr){
                        if(arr.length<2){
                            return arr
                        }
                        let mid=Math.floor(arr.length/2)
                        let left=arr.slice(0,mid)
                        let right=arr.slice(mid)
                        return merge(mergeSort(left),mergeSort(right))
                    }

                    function merge(left,right){
                        let sorted=[]
                        while(left.length && right.length){
                            if(left[0]<right[0]){
                                sorted.push(left.shift())
                            }else{
                                sorted.push(right.shift())
                            }
                        }
                        return [...sorted,...left,...right]
                    }

                    const arr=[8,4,3,7,6,2]
                    console.log(mergeSort(arr));