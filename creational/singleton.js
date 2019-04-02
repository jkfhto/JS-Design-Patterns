/**
 * 单例模式的定义是： 保证一个类仅有一个实例， 并提供一个访问它的全局访问点。
 * 单例模式是一种常用的模式， 有一些对象我们往往只需要一个， 比如线程池、 全局缓存、 浏览器中的 window 对象等
 */

/**
 * 透明单例
 */
class SingleObject{
    constructor(){
        if (!SingleObject.instance) {
            SingleObject.instance = this;
        }
        return SingleObject.instance;
    }
}
/**
 * 不透明单例 必须使用getInstance来获取单例对象
 */
class SingleObject2{
    write(){
        console.log("write");
    }
}
SingleObject2.getInstance = (function(){
    let instance = null;
    return function(){
        if(!instance){
            instance = new SingleObject2();
        }
        return instance;
    }
})()

let single1 = new SingleObject();
let single2 = new SingleObject();
console.log("Are single1 and single2 the same instance? " + (single1 === single2));

let single3 = SingleObject2.getInstance();
let single4 = SingleObject2.getInstance();
console.log("Are single3 and single4 the same instance? " + (single3 === single4));

