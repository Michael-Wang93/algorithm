const curry = (fun) => {
    const params = [];
    return function (){
        params.push([].slice.call(arguments));
        function _add() {
            params.push([].slice.call(arguments));
            return _add;
        }
        _add.valueOf = () => {
            return fun.call(null, params);
        }
        _add.toString = () => {
            return fun.call(null, params);
        }
        return _add;
    }
}


const sum = (params) => {
    return params.reduce((pre, now) => {
        return Number(pre) + Number(now);
    })
}

console.log(curry(sum)(1)(2)(3)(3) + 1);