/**
 * ConcreteProduct（具体产品角色）：它是简单工厂模式的创建目标，所有被创建的对象都充当这个角色的某个具体类的实例。
 */
class jsCourse{
    constructor(type){
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

/**
 * 具体产品角色
 */
class javaCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

/**
 * 具体产品角色
 */
class pythonCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

/**
 * Factory（工厂角色）：工厂角色即工厂类，它是简单工厂模式的核心，负责实现创建所有产品实例的内部逻辑；工厂类可以被外界直接调用，创建所需的产品对象；
 */
class simpleFactory{
    constructor(){
        
    }
    create(type) {
        if (type === "js") {
            return new jsCourse(type);
        } else if (type === "java") {
            return new javaCourse(type);
        } else if (type === "python") {
            return new pythonCourse(type);
        }else{
            return null;
        }
    }
}

export default simpleFactory;

class Test{
    constructor(){
        this.simpleFactory = new simpleFactory();
        this.simpleFactory.create("js");
    }
}

let _Test = new Test();