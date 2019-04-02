/**
 * JavaScript 简化版本的策略模式
 */
var strategies = {
    "S": function (salary) {
        return salary * 5;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};