/**
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
 * 实体蛋糕类2
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
 * 抽象装饰者
 */
class AbstractDecorator extends AbstractCake {}

/**
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
 * 实体装饰者芒果
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
