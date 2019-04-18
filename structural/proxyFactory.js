/**
 * 创建缓存代理的工厂
 */
var createProxyFactory = function (fn) {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments);
    }
};

/**
 * 计算乘积
 */
var mult = function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a;
};

var proxyMult = createProxyFactory(mult);
alert(proxyMult(1, 2, 3, 4)); // 输出：24
alert(proxyMult(1, 2, 3, 4)); // 输出：24