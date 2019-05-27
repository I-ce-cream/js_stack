function Stack(){
    var stack = [];
    var minlist = [];

    this.size = function(){
        return stack.length;
    }

    this.is_empty = function(){
        return this.size() == 0;
    }

    this.push = function(data){
        stack.push(data);
        if(this.mintop || this.mintop >= data){
            minlist.push(data);
        }
    }

    this.pop = function(){
        var num
        if(this.is_empty()){
            return null;
        }else{
            num = stack.pop();
            if(this.mintop == num){
                minlist.pop();
            }
            return num;
        }
    }

    this.top = function(){
        if(this.is_empty()){
            return null;
        }else{
            return stack[this.size() - 1];
        }
    }

    this.mintop = function(){
        if(minlist.length == 0){
            return null;
        }else{
            return minlist[minlist.length - 1];
        }
    }

    this.min = function(){
        return this.mintop();
    }

    this.clear = function(){
        stack = [];
    }

    this.print = function(){
        console.log(stack);
    }
}


var s = new Stack();


s.push(4);
s.push(2);
s.push(3);
s.push(2);
s.push(10);
s.push(2);
s.pop();
console.log(s.min());
//console.log(s.pop());
//s.clear();
//s.print();