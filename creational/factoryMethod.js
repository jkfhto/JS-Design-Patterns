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

class courseFactory {
    constructor() {
        
    }
    create() {
        throw new Error("This method must be overwritten!");
    }
}

class jsFactory extends courseFactory {
    constructor() {
       super();
    }
    create(){
        return new jsCourse("js");
    }
}

class javaFactory extends courseFactory {
    constructor() {
        super();
    }
    create() {
        return new javaCourse("java");
    }
}

class pythonFactory extends courseFactory {
    constructor() {
        super();
    }
    create() {
        return new pythonCourse("python");
    }
}

export default courseFactory;

class Test {
    constructor() {
        this.courseFactory = new pythonFactory();
        this.courseFactory.create();
    }
}

let _Test = new Test();