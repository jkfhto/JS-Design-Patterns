class jsCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" + this.type);
    }
}

class javaCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" + this.type);
    }
}

class pythonCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" + this.type);
    }
}

/**
 * （抽象工厂）：在抽象工厂类中，声明了工厂方法(Factory Method)，用于返回一个产品。抽象工厂是工厂方法模式的核心，所有创建对象的工厂类都必须实现该接口
 */
class courseFactory {
    constructor() {

    }
    create() {
        throw new Error("This method must be overwritten!");
    }
}

/**
 * ConcreteFactory（具体工厂）：它是抽象工厂类的子类，实现了抽象工厂中定义的工厂方法，并可由客户端调用，返回一个具体产品类的实例
 */
class jsFactory extends courseFactory {
    constructor() {
        super();
    }
    create() {
        return new jsCourse("js");
    }
}

/**
 * 具体javaFactory工厂
 */
class javaFactory extends courseFactory {
    constructor() {
        super();
    }
    create() {
        return new javaCourse("java");
    }
}

/**
 * 具体pythonFactory工厂
 */
class pythonFactory extends courseFactory {
    constructor() {
        super();
    }
    create() {
        return new pythonCourse("python");
    }
}

export {
    pythonFactory,
    javaFactory,
    jsFactory
};

class Test {
    constructor() {
        this.courseFactory = new pythonFactory();
        this.courseFactory.create();
    }
}

let _Test = new Test();