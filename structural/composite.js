/**
 * 组合模式的关键是定义了一个抽象构件类，它既可以代表叶子，又可以代表容器，而客户端针对该抽象构件类进行编程，无须知道它到底表示的是叶子还是容器，可以对其进行统一处理
 */
/**
 * Component（抽象构件）：它可以是接口或抽象类，为叶子构件和容器构件对象声明接口，在该角色中可以包含所有子类共有行为的声明和实现。在抽象构件中定义了访问及管理它的子构件的方法，如增加子构件、删除子构件、获取子构件等
 */
class CatalogCompoment{
    constructor(){

    }

    add(){
        throw new Error('不支持add操作！');
    }

    remove(){
        throw new Error('不支持remove操作！');
    }

    getName(){
        throw new Error('不支持getName操作！');
    }

    getPrice() {
        throw new Error('不支持getPrice操作！');
    }

    print() {
        throw new Error('不支持print操作！');
    }
}

/**
 * Leaf（叶子构件）：它在组合结构中表示叶子节点对象，叶子节点没有子节点，它实现了在抽象构件中定义的行为。对于那些访问及管理子构件的方法，可以通过异常等方式进行处理
 */
class Course extends CatalogCompoment{
    constructor(name,price){
        super();
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    print() {
        console.log(`名字：${this.name}，价格：${this.price}`);
    }
}

/**
 * Composite（容器构件）：它在组合结构中表示容器节点对象，容器节点包含子节点，其子节点可以是叶子节点，也可以是容器节点，它提供一个集合用于存储子节点，实现了在抽象构件中定义的行为，包括那些访问及管理子构件的方法，在其业务方法中可以递归调用其子节点的业务方法
 */
class CourseCatalog extends CatalogCompoment {
    constructor(name){
        super();
        this.items = [];
        this.name = name;
    }

    getName() {
        return this.name;
    }

    add(course) {
        this.items.push(course);
    }

    remove(course) {
        this.items = this.items.filter(items => {
            return items !== course;
        });
    }

    print() {
        console.log(this.name);
        this.items.forEach(item => {
            item.print();
        });
    }
}

export {
    Course,
    CourseCatalog
}

//测试
let jsCourse = new Course("js实战",100);
let javaCourse = new Course("java", 80);
let pythonCourse = new Course("python", 180);

let jsCourseCatalog = new CourseCatalog("js");
let jsCourse2 = new Course("js设计模式", 200);
let jsCourse3 = new Course("js面向对象", 100);

let CourseCatalog1 = new CourseCatalog("课程总目录");
CourseCatalog1.add(javaCourse);
CourseCatalog1.add(pythonCourse);
CourseCatalog1.add(jsCourseCatalog);

jsCourseCatalog.add(jsCourse);
jsCourseCatalog.add(jsCourse2);
jsCourseCatalog.add(jsCourse3);
jsCourseCatalog.remove(jsCourse);
CourseCatalog1.print();
