class jsCourse{
    constructor(type){
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

class javaCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

class pythonCourse {
    constructor(type) {
        this.type = type;
        console.log("课程类型为：" +this.type);
    }
}

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