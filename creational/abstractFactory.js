/**
 * AbstractFactory（抽象工厂）：它声明了一组用于创建同一产品族产品的方法，每一个方法对应一种产品
 */
class courseFactory {
    constructor() {

    }
    getVideo() {
        throw new Error("This method must be overwritten!");
    }
    getArticle() {
        throw new Error("This method must be overwritten!");
    }
}

/**
 * ConcreteProduct（具体产品）：它定义具体工厂生产的具体产品对象，实现抽象产品接口中声明的业务方法
 */
class jsVideo{
    constructor(){
        
    }
    create(){
        console.log("js视频");
    }
}

class jsArticle {
    constructor() {

    }
    create() {
        console.log("js手记");
    }
}

/**
 * js课程产品族具体工厂
 * ConcreteFactory（具体工厂）：它实现了在抽象工厂中声明的创建产品的方法，生成一组具体产品，这些产品构成了一个产品族，每一个产品都位于某个产品等级结构中
 */
class jsCourseFactory extends courseFactory {
    constructor() {
        super();
    }
    getVideo() {
        return new jsVideo();
    }
    getArticle() {
        return new jsArticle();
    }
}

class javaVideo {
    constructor() {

    }
    create() {
        console.log("java视频");
    }
}

class javaArticle {
    constructor() {

    }
    create() {
        console.log("java手记");
    }
}

/**
 * java课程产品族具体工厂
 */
class javaCourseFactory extends courseFactory {
    constructor() {
        super();
    }
    getVideo() {
        return new javaVideo();
    }
    getArticle() {
        return new javaArticle();
    }
}


export {jsCourseFactory,javaCourseFactory} ;

class Test {
    constructor() {
        this.courseFactory = new jsCourseFactory();
        let video = this.courseFactory.getVideo();
        let article = this.courseFactory.getArticle();
        video.create();
        article.create();
    }
}

let _Test = new Test();