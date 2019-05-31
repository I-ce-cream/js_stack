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
}


function Queue(){
    var pushlist = new Stack();

    this.size = function(){
        return pushlist.size();
    }

    function is_empty(){
        return this.size == 0;
    }

    this.add = function(data){
        pushlist.push(data);
    }

    this.shift = function(){
        if(is_empty()){
            return null;
        }else{
            let poplist = new Stack();
            let num;
            while(this.size() != 1){
                poplist.push(pushlist.pop());
            }
            num = pushliet.pop();
            while(!poplist.is_empty()){
                pushlist.push(poplist.pop());
            }
            return num;
        }
    }

    this.clear = function(){
        pushlist.clear();
    }

    this.front = function(){
        if(is_empty()){
            return null;
        }else{
            let poplist = new Stack();
            let num;
            while(this.size() != 1){
                poplist.push(pushlist.pop());
            }
            num = pushliet.pop();
            poplist.push(num);
            while(!poplist.is_empty()){
                pushlist.push(poplist.pop());
            }
            return num;
        }
    }

    this.back = function(){
        if(is_empty()){
            return null;
        }else{
            let num;
            num = pushlist.pop();
            pushlist.push(num);
            return num;
        }
    }
}

s = new Queue();

s.add(4);
s.add(6);
s.add(8);
s.add(3);
console.log(s.front());
console.log(s.back());