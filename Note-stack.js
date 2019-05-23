function Stack(){
    var  items = [];

    this.size = function () {
        return items.length;
    }

    this.is_empty = function () {
        return this.size()===0;
    }

    this.push = function (item) {
        items.push(item);
    }
    
        
    this.pop = function () {
        if(this.is_empty()){
            return null;
        }else{
            return items.pop();
        }
    }

    this.top = function () {
        return items[this.size()-1];
    }

    this.clear = function () {
        items = [];
    }
}

var s = new Stack();

// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// s.push(5);
// console.log(s.is_empty());
// console.log(s.pop());
// console.log(s.is_empty());
// console.log(s.size());
// console.log(s.peek())

console.log(s.pop());




