class AC220{
    constructor(){
        this.outPut = 220;
        console.log(`输出${this.outPut}v的交流电`);
    }
    outPut(){
        console.log(`输出${this.outPut}v的交流电`);
    }   
}

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