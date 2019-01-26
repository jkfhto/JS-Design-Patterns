/**
 * Component（抽象构件）：它是具体构件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法，它的引入可以使客户端以一致的方式处理未被装饰的对象以及装饰之后的对象，实现客户端的透明操作
 * 抽象蛋糕类
 */
class AbstractCake {
    constructor(description = 'Unknown cake') {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    cost() {
        throw new Error("This method must be overwritten!");
    }
}

/**
 * ConcreteComponent（具体构件）：它是抽象构件类的子类，用于定义具体的构件对象，实现了在抽象构件中声明的方法，装饰器可以给它增加额外的职责（方法）
 * 实体蛋糕类1
 */
class Cake1 extends AbstractCake{
    constructor(){
        super();
        this.description = "蛋糕1";
    }

    cost() {
       return 10;
    }
}

/**
 * 实体蛋糕类2（具体构件）
 */
class Cake2 extends AbstractCake {
    constructor() {
        super();
        this.description = "蛋糕2";
    }

    cost() {
        return 15;
    }
}

/**
 * Decorator（抽象装饰类）：它也是抽象构件类的子类，用于给具体构件增加职责，但是具体职责在其子类中实现。它维护一个指向抽象构件对象的引用，通过该引用可以调用装饰之前构件对象的方法，并通过其子类扩展该方法，以达到装饰的目的
 * 抽象装饰者
 */
class AbstractDecorator extends AbstractCake {}

/**
 * ConcreteDecorator（具体装饰类）：它是抽象装饰类的子类，负责向构件添加新的职责。每一个具体装饰类都定义了一些新的行为，它可以调用在抽象装饰类中定义的方法，并可以增加新的方法用以扩充对象的行为
 * 实体装饰者草莓
 */
class Strawberry extends AbstractDecorator {
    constructor(cake) {
        super();
        this.cake = cake;
    }

    getDescription() {
        return this.cake.getDescription() + ", 加Strawberry";
    }

    cost() {
        return 5 + this.cake.cost();
    }
}

/**
 * 实体装饰者芒果（具体装饰类）
 */
class Mango extends AbstractDecorator {
    constructor(cake) {
        super();
        this.cake = cake;
    }

    getDescription() {
        return this.cake.getDescription() + ", 加Mango";
    }

    cost() {
        return 3 + this.cake.cost();
    }
}

export {
    Strawberry,
    Mango,
    Cake1,
    Cake2
};

let oCake1WithStrawberryAndMango = new Cake1();
oCake1WithStrawberryAndMango = new Strawberry(oCake1WithStrawberryAndMango);
oCake1WithStrawberryAndMango = new Strawberry(oCake1WithStrawberryAndMango);
oCake1WithStrawberryAndMango = new Mango(oCake1WithStrawberryAndMango);


console.log(oCake1WithStrawberryAndMango.getDescription()+"；销售价格："+oCake1WithStrawberryAndMango.cost());

let oCake2WithStrawberryAndMango = new Cake2();
oCake2WithStrawberryAndMango = new Strawberry(oCake2WithStrawberryAndMango);
oCake2WithStrawberryAndMango = new Mango(oCake2WithStrawberryAndMango);
oCake2WithStrawberryAndMango = new Mango(oCake2WithStrawberryAndMango);


console.log(oCake2WithStrawberryAndMango.getDescription() + "；销售价格：" + oCake2WithStrawberryAndMango.cost());
