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
        if(!this.mintop() || this.mintop() >= data){
            minlist.push(data);
        }
    }

    this.pop = function(){
        var num;
        if(this.is_empty()){
            return null;
        }else{
            num = stack.pop();
            if(num == this.mintop()){
                minlist.pop();
            }
            return num;
        }
    }

    this.top = function(){
        if(this.is_empty()){
            return null;
        }else{
            return stack[this.size()-1];
        }
    }

    this.mintop = function(){
        if(minlist.length == 0){
            return null;
        }else{
            return minlist[minlist.length-1];
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

function Check(str){
    var s = new Stack();
    for(var i in str){
        if(str[i] == "("){
            s.push(str[i]);
        }
        if(str[i] == ")"){
            if(s.pop() != "("){
                return false;
            }
        }
    }
    return s.is_empty();
}

s = new Stack();
s.push(7);
s.push(5);
s.push(1);
s.push(1);
s.pop();
s.push(2);

console.log(s.min());


//console.log(Check(")"));