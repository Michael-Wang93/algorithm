function Promise(callback) {
    const self = this;
    self.status = 'pending';
    self.data = undefined; 
    self.onResolvedCallback = [];
    self.onRejectedCallback = []
    this.callback = fun;
    function resolve(data) {
        self.data = data;
        if(self.status !== 'resolve') {
            onResolvedCallback.forEach(callback => {
                callback(self.data);
                self.status = 'resolve';
            })
        }
        
    }
    function reject(data) {
        self.data = data;
        if(self.status === 'reject') {
            onResolvedCallback.forEach(callback => {
                callback(self.data);
                self.status = 'reject';
            })
        }
    }
    try {
        callback(resolve, reject);
    } catch(e) {
        reject(e);
    }
}
Promise.prototype.then = function (resolveCallback, rejectCallback) {
    let onResolved = typeof resolveCallback === 'function' ? resolveCallback : function(v) {}
    let onRejected = typeof rejectCallback === 'function' ? rejectCallback : function(r) {}
    if(this.status === 'pending') {
        this.onResolvedCallback.push((res) => {
            var x = onResolved(res)
            if (x instanceof Promise) {
                x.then(resolve, reject)
            }
        });
        this.onRejectedCallback.push((res) => {
            var x = onRejected(res)
            if (x instanceof Promise) {
                x.then(resolve, reject)
            }
        });
    }
    if(this.status === 'reject') {
        return new Promise((resolve, reject) => {
            let x = onRejected(this.data);
            if(x instanceof Promise) {
                x.then(resolve, reject);
            }
        });
    }
    if(this.status === 'resolve') {
        return new Promise((resolve, reject) => {
            let x = onResolved(this.data);
            if(x instanceof Promise) {
                x.then(resolve, reject);
            }
        });
    }
    return this.prototype.constructor()
    
}

Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected)
  }