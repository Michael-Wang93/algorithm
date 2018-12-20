- let其实也是有变量提升的
- 凡是可以用for...of的都是实现了Iterator接口的，即在对象的原型上添加了Symbol.iterator方法。举个例子：
    ```
        [Symbol.iterator] : function () {
            return {
            next: function () {
                return {
                value: 1,
                done: true
                };
            }
            };
        }
    ```
- {}对象不能用for...of ， 只能用for...in
- 调用Iterator 接口的场合： 解构赋值， 扩展运算符(...), yield*， for...of
    Array.from()
    Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
    Promise.all()
    Promise.race(）
- 类数组对象也可以用for...of遍历，比如arguments对象、DOM NodeList 对象
- for...in也可以遍历数组，但循环是以字符串作为键名“0”、“1”、“2”等
- for...in会遍历原型链上键
- Generator是一个状态机， Generator返回一个遍历器对象
- co库自执行Generator 
    ```
    function run(gen){
        var g = gen();

        function next(data){
            var result = g.next(data);
            if (result.done) return result.value;
            result.value.then(function(data){
            next(data);
            });
        }

        next();
    }
    ```
-  * helloWorldGenerator() {}, var hw = helloWorldGenerator();hw是一个迭代器，执行hw.next()方法的时候，才会真正执行helloWorldGenerator函数里面的东西，遇到第一个yield返回yield后面表达式的值， 然后在此处暂停执行，hw.next(44)参数传的值是上一次yield暂停的地方，返回给yield赋值的对象

- Proxy 用于修改某些操作的默认行为，属于一种元编程var proxy = new Proxy(target, handler);
- Reflect有几个目的，将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty）， 修改某些Object方法的返回结果，让其变得更合理， 让Object操作都变成函数行为， Reflect对象的方法与Proxy对象的方法一一对应
- Symbol 作为属性名该属性不会出现在for...in、for...of循环中
- es6数组去重[...new Set(array)]， Array.from(new Set(array));
- WeakSet只能保存对象， WeakSet 不能遍历
- Map 转为数组， [...myMap]
- WeakMap只接受对象作为键名（null除外）， 为了解决内存泄露
- WeakMap 应用的典型场合就是 DOM 节点作为键名
- async 函数是什么？一句话，它就是 Generator 函数的语法糖。

