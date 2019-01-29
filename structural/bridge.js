/**
 * 绘制带颜色的图形
 * 颜色和图形实现了分离，增加新的颜色或者图形对另一方都没有任何影响，使用起来非常灵活，扩展也更为方便
 */

/**
 * 抽象Color类
 */
class Color {
    applyColor() {
        throw new Error('This method should be overwritten');
    }
}

class RedColor extends Color {
    applyColor() {
        return 'red';
    }
}

class YellowColor extends Color {
    applyColor() {
        return 'yellow';
    }
}

/**
 * 绘制图形
 */
class Shape{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    draw(){
        console.log(`${this.name} ${this.color.applyColor()}`);
    }
}

export {
    RedColor,
    YellowColor,
    Shape
}

let red = new RedColor();
let yellow = new YellowColor();
let Shape1 = new Shape("circle", red);
Shape1.draw();//绘制颜色图形

let Shape2 = new Shape("triangle", yellow);
Shape2.draw();


