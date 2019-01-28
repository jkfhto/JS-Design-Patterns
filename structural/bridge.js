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
Shape1.draw();

let Shape2 = new Shape("triangle", yellow);
Shape2.draw();


