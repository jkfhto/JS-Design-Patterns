class SingleObject{
    constructor(){
        if (!SingleObject.instance) {
            SingleObject.instance = this;
        }
        return SingleObject.instance;
    }
}

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

