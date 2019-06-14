function LinkList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    }
 
    let length = 0,
         head = null;
 
    this.find = function(position){
        let current;  
        let node;    
        if(position <= 0){
            return false;
        }
//        if(length == 0){
//            return head;
//        }else{
        current = head;
        while(position - 1){
            current = current.next;
            position--;
        }
       // node = new Node(current.element);
       // node.next = current.next;
        return current;            
    }
 
    this.append = function(element){
        let node = new Node(element),
             current;
         
        current = this.find(length);
        current.next = node;
        length++;    
 
//        if(!head){
//            head = node;
//        }else{
//            current = head;
//            while(current.next){
//                current = current.next;
//            }
//            current.next = node;
//        }
//        length++;
    }
 
    this.insert = function(position,element){
        if(position >= 0 && position <= length){
            let node = new Node(element),
                 current = head
                 previous;
            if(position == 0){
                node.next = current;
                head = node;
            }else{
                previous = this.find(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }   
            length++;         
        }else{
            return false;
        }
    }
 
    this.remoneAt = function(position){
        if(position >= 0 && position <= length){
            var current = head,
                    previous;
            if(position == 0){
                head = current.head;
            }else{
                previous = this.find(position - 1);
                current = previous.next;
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else{
            return false;
        }
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

    this.clear = function(){
        length = 0;
        head = null;
    }

    this.print = function(){
        let current = head,
            ret = '';

        while(current){
            ret += current.element;            
            current = current.next;
            if(current){
                ret += '->'
            }
        }
        return ret;
    } 
 
}
 

var list = new LinkList();
list.append(1);