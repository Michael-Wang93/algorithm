const instanceOf = (construct) => {
    let sub = this.__proto__;
    let prototype = construct.prototype;
    while(true) {
        if(left === null) {
            return false;
        }
        if(sub = prototype) {
            return true;
        }
        sub = sub.__proto__;
    }
}

Object.prototype.instanceOf = instanceOf;