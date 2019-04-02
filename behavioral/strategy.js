/**
 * 模拟一些传统面向对象语言实现策略模式
 */
class CalculateBonus {

    constructor() {
        this.salary = null; // 原始工资
        this.strategy = null; // 绩效等级对应的策略对象
    }

    getBonus() {
       return this.strategy(this.salary);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    setSalary(salary) {
        this.salary = salary;
    }
}
 
function performanceS(salary) {
    return salary * 5;;
}

function performanceA(salary) {
    return salary * 3;
}

function performanceB(salary) {
    return salary * 2
}