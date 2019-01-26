/**
 * Adaptee（适配者类）：适配者即被适配的角色，它定义了一个已经存在的接口，这个接口需要适配，适配者类一般是一个具体类，包含了客户希望使用的业务方法，在某些情况下可能没有适配者类的源代码
 */
class AC220{
    constructor(){
        this.outPut = 220;
        console.log(`输出${this.outPut}v的交流电`);
    }
    outPut(){
        console.log(`输出${this.outPut}v的交流电`);
    }   
}

/**
 * Adapter（适配器类）：适配器可以调用另一个接口，作为一个转换器，对Adaptee进行适配，适配器类是适配器模式的核心
 */
class powerAdapter{
    constructor(){
        this.adaptee = new AC220();
    }
    outPut(){
        let adapterInput = this.adaptee.outPut;
        let adapterOutput = adapterInput/44;
        console.log(`输入${adapterInput}v的交流电，输出${adapterOutput}v的直流电`);
    }
}

export {
    powerAdapter
}

class Test {
    constructor() {
        this.adapterInput = new powerAdapter();
        this.adapterInput.outPut();
    }
}

let _Test = new Test();