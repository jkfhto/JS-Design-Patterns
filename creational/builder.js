/**
 * （产品角色）：它是被构建的复杂对象，包含多个组成部件，具体建造者创建该产品的内部表示并定义它的装配过程
 */
class course{
    constructor(){
        this.courseName = null;
        this.courseVideo = null;
        this.courseArticle = null;
    }
}

/**
 * 课程建造者
 * （具体建造者）：它实现了Builder接口，实现各个部件的具体构造和装配方法，定义并明确它所创建的复杂对象，也可以提供一个方法返回创建好的复杂产品对象
 */
class courseBuilder{
    constructor(){
        this.course = new course();
    }
    buildName(name){
        this.course.courseName = name;
    }
    buildVideo(name) {
        this.course.courseVideo = name;
    }
    buildArticle(name) {
        this.course.courseArticle = name;
    }
    build() {
        console.log(this.course);
        return this.course;
    }
}

/**
 * Director（指挥者）：指挥者又称为导演类，它负责安排复杂对象的建造次序，指挥者与抽象建造者之间存在关联关系，可以在其construct()建造方法中调用建造者对象的部件构造与装配方法，完成复杂对象的建造。客户端一般只需要与指挥者进行交互，在客户端确定具体建造者的类型，并实例化具体建造者对象，然后通过指挥者类的构造函数或者Setter方法将该对象传入指挥者类中
 */
class courseCoach{
    constructor(){

    }
    build(name,video,article){
        this.courseBuilder.buildName(name);
        this.courseBuilder.buildVideo(video);
        this.courseBuilder.buildArticle(article);
        return this.courseBuilder.build();
    }
    setBuilder(builder) {
        this.courseBuilder = builder;
    }
}

export {courseCoach,courseBuilder}

class Test {
    constructor() {
        this.courseCoach = new courseCoach();
        this.courseCoach.setBuilder(new courseBuilder());
        this.courseCoach.build("js设计模式","js设计模式视频");
    }
}

let _Test = new Test();