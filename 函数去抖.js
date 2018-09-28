const debounce = (fun, delay) => {
    let timer = null;
    return function () {
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fun.apply(this, arguments);  
        })
    }
}