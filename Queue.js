function Stack(){
    var stack = [];

    this.size = function(){
        return stack.length;
    }

    this.is_empty = function(){
        return this.size() == 0;
    }

    this.push = function(data){
        stack.push(data);
    }

    this.pop = function(){
        if(this.is_empty()){
            return null;
        }else{
            return stack.pop();
        }
    }

    this.top = function(){
        if(this.is_empty()){
            return null;
        }else{
            return stack[this.size() - 1];
        }
    }

    this.clear = function(){
        stack = [];
    }

    this.print = function(){
        return stack;
    }
    
    this.bottom = function(){
        if(this.is_empty()){
            return null;
        }else{
            return stack[0];
        }
    }
}


function Queue(){
    var addlist = new Stack();
    var removelist = new Stack();
    var num;
    
    this.size = function(){
        return (addlist.size() + removelist.size());
    }

    this.is_empty = function(){
        return this.size() == 0;
    }

    this.enqueue = function(data){
        addlist.push(data);
    }

    this.dequeue = function(){
        if(removelist.size() != 0){
            return removelist.pop();
        }else{
            if(this.is_empty()){
                return null;
            }else{
                while(addlist.size() != 0){
                    removelist.push(addlist.pop());   
                }
                return removelist.pop();
            }
        }
    }

    this.clear = function(){
        addlist.clear();
	    removelist.clear();
    }

    this.head = function(){
        if(removelist.size() != 0){
            return removelist.top();
        }else{
            return addlist.bottom();
        }
    }

    this.last = function(){
        if(addlist.size() != 0){
            return addlist.top();
        }else{
            return removelist.bottom();
        }
    }

    this.print = function(){
        if(removelist.size() != 0 && addlist.size() != 0){
            return removelist.print().reverse().toString()+','+addlist.print().toString();
        }
        if(removelist.size() == 0){
            return addlist.print().toString();
        }
        if(addlist.size() == 0){
            return removelist.print().reverse().toString();
        }        
    }
}

function Hoop(count,x){
    var hoop = new Queue();
    var num = 1;
    for(let i = 1;i <= count;i++){
        hoop.enqueue(i);
    }

    while(hoop.size() != 1){
        if(num == x){
            hoop.dequeue();
        }else{
            hoop.enqueue(hoop.dequeue());
        }
    }

    console.log(hoop.head());
}

//Hoop(10,3);

// s = new Queue();

// s.add(4);
// s.add(6);
// s.add(8);
// s.add(3);
// console.log(s.front());
// console.log(s.back());

// s= new Queue();
// s.enqueue(2);
// s.enqueue(4);
// s.enqueue(6);
// s.enqueue(4);
// s.dequeue();
// s.enqueue(3);
// console.log(s.print());



// function Test(count,num){
//     var List = new Queue();
//     var x = 1;
        
//     for(var i = 1;i<=count;i++){
//         List.enqueue(i);
//     }

	
//     while(List.size() != 1){
//         if(x == num){
//             List.dequeue();
//                 x = 1;
//         }else{
//             List.enqueue(List.dequeue());
//             x += 1;
//         }        
//     }

//     return List.head();
// }


// console.log(Test(10,3));

//队列实现斐波那契数列
//杨辉三角形 队列
//


function tenton(element,n) {
    var st = new Stack();
    let str=[];
    var rls = '';

    if (element > 0) { 
        while (element > 0) {
            st.push(element % n);
            element = parseInt(element/n);
        }
    }
    else {
        return '0';
    }
    str = st.print();
    for (i = str.length - 1; i>=0 ;i--) {
        rls+=str[i];
    }

    //rls = rls.replace(/,/g, "");//取消字符串中出现的所有逗号 
    return rls;
}


//console.log(tenton(10,2));


function fib(x){
    let list = new Queue();
    list.enqueue(1);
    list.enqueue(1);
   
    for (let i = 0; i <= x - 2; i++){
        list.enqueue(list.head() + list.last());
        list.dequeue();
    }
    return list.head();
}

//console.log(fib(6));


function YH_Array(element, n) {
    let cnt = 0;
    let que = new Queue();
    let stk = new Stack();
    if (n<1) {
        return undefined;
    }
    que.enqueue(element);
    console.log(que.print());
    while (que.size() != n) {
        cnt = que.size();
        for(let i=1; i<=cnt; i++) {
            if (i==1) { 
                que.enqueue(que.head()); 
                que.dequeue();
                stk.push(element);
            }
            else{               
                que.enqueue(que.head()+stk.top()); 
                stk.push(que.dequeue());
            }                     
        }
        que.enqueue(element);
        console.log(que.print());
    }
}   

function YH(count){
    let newlist = new Queue();
    let oldlist = new Queue();
    console.log('1');
    console.log('1,1');
    oldlist.enqueue(1);
    oldlist.enqueue(1);
    while(count - 2 != 0){
        newlist.enqueue(1);
        for(let i = 1;i < oldlist.size();i++){
            newlist.enqueue(oldlist.dequeue()+oldlist.head());
        }
        newlist.enqueue(1);
        console.log(newlist.print());
        oldlist.clear();
        for(let l = 0;l<=newlist.size();l++){
            oldlist.enqueue(newlist.dequeue());
        }
        console.log('(-----');
        console.log(oldlist.print());
        console.log('-----)');
        newlist.clear();
        count -= 1;
    }
}
//YH_Array(1,5);

YH(5);