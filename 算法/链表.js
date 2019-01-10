export default class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

export default class ListLink {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const node = new ListNode(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    delete(value) {
        let currentNode = head;
        let preNode = null;
        while(currentNode) {
            if(!preNode && currentNode.value === value) {
                currentNode.next = null;
                this.head = this.head.next;
            }
            if(currentNode.value === value) {
                currentNode.next = null;
                return preNode.next = currentNode.next;
            }
            preNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    reverse() {
        let currentNode = head;
        let preNode = null;
        while(currentNode) {
            if(!preNode) {
                this.head = this.tail;
            } else if(!currentNode.next){
                this.tail = this.head
            } else {
                currentNode.next = preNode;
            }
            preNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    
}