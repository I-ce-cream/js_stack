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


// var s = new Stack();


// s.push(4);
// s.push(2);
// s.push(3);
// s.push(2);
// s.push(10);
// s.push(2);
// s.pop();
// console.log(s.min());
//console.log(s.pop());
//s.clear();
//s.print();