const throttle = (fun, delay) => {
    let lastTime = Date.now();
    return function () {
        let nowTime = Date.now();
        if(nowTime - lastTime > delay) {
            fun.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}