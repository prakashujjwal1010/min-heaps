var canvas=document.getElementById('myCanvas');
var w=window.innerWidth;
var h=window.innerHeight;

canvas.width=w-100;
canvas.height=h-100;
var c=canvas.getContext('2d');

function minHeap(){
    this.heapArr=[];
    this.left=function(i){
        return(2*i+1);
    };
    this.right=function(i){
        return(2*i+2);
    };
    this.parent=function(i){
        return(Math.floor((i-1)/2));
    };
}
minHeap.prototype.insert=function(val){
    if(this.heapArr.length==0){
        this.heapArr.push(val);
    }
    else{
    var i=this.heapArr.length;
        this.heapArr[i]=val;
        while(i!=0 && this.heapArr[i]<this.heapArr[this.parent(i)]){
        var temp=this.heapArr[i];
        this.heapArr[i]=this.heapArr[this.parent(i)];
        this.heapArr[this.parent(i)]=temp;
            i=this.parent(i);
        }
    }
}

minHeap.prototype.extractMin=function(){
    if(this.heapArr.length==0){
        return null;
    }
    else if(this.heapArr.length==1){
        return this.heapArr[0];
    }
    else{
        var root=this.heapArr[0];
        this.heapArr[0]=this.heapArr[this.heapArr.length-1];
        this.minHeapify(0);
        return root;
    }
}

minHeap.prototype.minHeapify=function(k){
    var l=this.left(k);
    var r=this.right(k);
    if(this.heapArr[l]<this.heapArr[k]){
        var small=l;
    }
    if(this.heapArr[r]<this.heapArr[small]){
        small=r;
    }
    console.log(small);
    if(small!=k){
        var temp=this.heapArr[k];
        this.heapArr[k]=this.heapArr[small];
        this.heapArr[small]=temp;
        console.log(small);
        
        this.minHeapify(small);
    }
}
minHeap.prototype.decrease=function(k,val){
    this.heapArr[k]=val;
    while(k!=0 && this.heapArr[k]<this.heapArr[this.parent(k)]){
        var temp=this.heapArr[k]
        this.heapArr[k]=this.heapArr[this.parent(k)]
        this.heapArr[this.parent(k)]=temp;
        k=this.parent(k);
    }
}

minHeap.prototype.delete=function(k){
    this.decrease(k,Math.log(0));
    this.extractMin();
}
// function to swap elements


var priorityQueue=new minHeap();
priorityQueue.insert(11);
priorityQueue.insert(3);
priorityQueue.insert(2);
priorityQueue.insert(7);
priorityQueue.insert(15);
priorityQueue.insert(5);
priorityQueue.insert(4);
priorityQueue.insert(45);


console.log(priorityQueue.heapArr);
console.log("-->"+priorityQueue.extractMin());
console.log(priorityQueue.heapArr);


