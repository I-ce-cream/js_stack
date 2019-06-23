////////////////////////////////////////////
////////////////////////////////////////////
//LinkedList v1
function LinkedList(){
	//节点  内容 + 指针
	var Node = function(data){
		this.data = data; //节点内容
		this.next = null; //指向下一个节点指针
	}
 
	var length = 0, //链表长度
	    head = null; //头指针
 
	this.append = function(data){
	 	var node = new Node(data), 
	 	    pointer; //操作所用指针
 
	 	if (!head){
	 		head = node;
	 	}else {
            pointer = head;
 
	 		while(pointer.next){
                pointer = pointer.next;
	 		}
 
	 		pointer.next = node;
	 	}
 
	 	length++;
	};
 
	this.insert = function(position, data){
	 	if (position >= 0 && position <= length) {
	 		var node = new Node(data),
		 		pointer = head,
		 		temp,
		 		index = 0;
 
	 		if(position === 0){
	 			node.next = pointer;
	 			head = node;
	 		}else{
	 			while(index++ < position){
                    temp = pointer;
	 				pointer = pointer.next;
	 			}
	 			node.next = pointer;
	 			temp.next = node;
	 		}
	 		length++;
	 		return true;
	 	}else{
	 		return false;
	 	}
	 };
	this.removeAt = function(position){
	 	if(position > -1 && position < length){
	 		var pointer = head,
	 		    temp,
	 		    index = 0;
	 		if (position === 0) {
	 			head = pointer.next;
	 		}else{
	 			while (index++ < position){
                    temp = pointer;
	 				pointer = pointer.next;
	 			}
	 			temp.next = pointer.next;
	 		};
	 		length--;
	 		return pointer.data;
	 	}else{
	 		return null;
	 	}
	};
	this.remove = function(data){
	 	var pointer = head,
	 	    temp;
	 	if(data === pointer.data){
	 		head = pointer.next;
	 		length--;
	 		return true;
	 	}
	 	temp = pointer;
	 	pointer = pointer.next;
	 	while(pointer){
	 		if(data === pointer.data){
                temp.next = pointer.next;
	 			length--;
	 			return true;
	 		}else{
                temp = pointer;
	 			pointer = pointer.next;
	 		}
	 	}
	 	return false;
	};
	this.remove = function(){
	 	if(length < 1){
	 		return false;
	 	}
	 	var pointer = head,
 		temp;
	 	if(length == 1){
	 		head = null;
	 		length--;
	 		return pointer.data;
	 	}
 	
	 	while(pointer.next !== null){
            temp = pointer;
	 		pointer = pointer.next;
	 	}
	 	temp.next = null;
	 	length--;
	 	return pointer.data;
	};
	this.indexOf = function(data){
	 	var pointer = head,
	 	    index = 0;
	 	while(pointer){
	 		if(data === pointer.data){
	 			return index;
	 		}
	 		index++;
	 		pointer = pointer.next;
	 	}
	 	return false;
	};
	this.isEmpty = function(){
	 	return length === 0;
	};
	this.size = function(){
	 	return length;
	};
	this.toString = function(){
	 	var pointer = head,
	 	    string = '';
	 	while(pointer){
	 		string += pointer.data;
	 		pointer = pointer.next;
	 	}
	 	return string;
	};	 
	this.getHead = function(){
	 	return head;
	}	
}


////////////////////////////////////////////
////////////////////////////////////////////
//LinkList v2
function LinkList(){
    let Node = function(data){
        this.data = data;
        this.next = null;
    }
 
    let length = 0,
        head = null;
        last = null;
 
    this.find = function(position){
        let pointer;     
        if(position <= 0){
            return false;
        }

        pointer = head;
        while(position - 1){
            pointer = pointer.next;
            position--;
        }
        return pointer;            
    }
 
    this.append = function(data){
        let node = new Node(data),
            pointer;
        if(length == 0){
            head = node;
            last = node;
        }else{
            pointer = this.find(length);
            pointer.next = node;
            last = node;
            length++;
        }            
    }
 
    this.insert = function(position,data){
        if(position >= 0 && position <= length){
            let node = new Node(data),
                 pointer = head
                 temp;
            if(position == 0){
                node.next = pointer;
                head = node;
            }else{
                temp = this.find(position - 1);
                pointer = temp.next;
                node.next = pointer;
                temp.next = node;
            }   
            length++;         
        }else{
            return false;
        }
    }
 
    this.remoneAt = function(position){
        if(position >= 0 && position <= length){
            var pointer = head,
                    temp;
            if(position == 0){
                head = pointer.next;
            }else if(poosition == length){
                pointer = last;
                last = this.find(position - 1);
                last.next = null;
            }else{
                temp = this.find(position - 1);
                pointer = temp.next;
                temp.next = pointer.next;
            }
            length--;
            return pointer.data;
        }else{
            return false;
        }
    }

    this.remove = function(){
        if(length < 1){
            return false;
        }
        var pointer = head,
        temp;
        if(length == 1){
            head = null;
            length--;
            return pointer.data;
        }
    
        while(pointer.next !== null){
           temp = pointer;
            pointer = pointer.next;
        }
        temp.next = null;
        length--;
        return pointer.data;
   }

    this.isEmpty = function(){
        return length == 0;
    }

    this.size = function(){
        return length;
    }

    this.getHead = function(){
        return head;
    }

    this.getLast = function(){
        return last;
    }

    this.clear = function(){
        length = 0;
        head = null;
        last = null;
    }

    this.print = function(){
        let pointer = head,
            ret = '';

        while(pointer){
            ret += pointer.data;            
            pointer = pointer.next;
            if(pointer){
                ret += '->'
            }
        }
        return ret;
    } 
}

////////////////////////////////////////////
////////////////////////////////////////////
//Stack
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
