Function.prototype.call = function (context) {

    function getParams() {
        var args = [];
        for(var i = 1, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        return args;
    }
    context.fn = this;
    eval('context.fn(' + getParams().join(',') + ')')
    context.fn();
    delete context.fn;
} 

Function.prototype.apply = function (context, args) {
    context.fn = this;
    eval('context.fn(' + args.join(',') + ')')
    context.fn();
    delete context.fn;
}

Function.prototype.bind = function (context, args) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}