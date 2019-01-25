class readImage{
    constructor(filename){
        this.filename = filename;
        this.loadFromDisk();//模拟初始化从硬盘加载数据
    }

    display(){
        console.log("display..."+this.filename);
    }

    loadFromDisk(){
        console.log("loading..."+this.filename);
    }
}

class ProxyImage{
    constructor(filename){
        this.realImage = new readImage(filename);
    }

    display() {
        this.realImage.display();
    }
}
export {
    ProxyImage
}

let _ProxyImage = new ProxyImage("1.png");
_ProxyImage.display();