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
        console.log(stack);
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
            num = 1;
        }else{
            hoop.enqueue(hoop.dequeue());
            num += 1;
        }
    }

    console.log(hoop.head());
}

Hoop(11,3);

// s = new Queue();

// s.add(4);
// s.add(6);
// s.add(8);
// s.add(3);
// console.log(s.front());
// console.log(s.back());