const deepCopy = (obj) => {
    if(Object.prototype.toString.call(obj) === '[object Function]') {
        let str=obj.toString();
        /^function\s*\w*\s*\(\s*\)\s*\{(.*)/.test(str);
        let str1=RegExp.$1.slice(0,-1);
        return new Function(str1);
        
    }
    if(Object.prototype.toString.call(obj) === '[object Date]') {
        return new Date(obj);
    }
    if(Object.prototype.toString.call(obj) === '[object RegExp]') {

        return new RegExp(obj);
    }
    if(!obj||typeof obj!=="object") {
        return obj
    }

    let cloneObj=Array.isArray(obj)?[]:{};
    for (let i in obj) {
        if(obj.hasOwnPorperty(i)) {
            cloneObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    }

    return cloneObj;
}