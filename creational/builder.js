class course{
    constructor(){
        this.courseName = null;
        this.courseVideo = null;
        this.courseArticle = null;
    }
}

/**
 * 课程建造者
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

class Test {
    constructor() {
        this.courseCoach = new courseCoach();
        this.courseCoach.setBuilder(new courseBuilder());
        this.courseCoach.build("js设计模式","js设计模式视频");
    }
}

let _Test = new Test();