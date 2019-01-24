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
 * js课程产品族工厂
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
 * java课程产品族工厂
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