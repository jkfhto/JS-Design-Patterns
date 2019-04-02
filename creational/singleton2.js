
var CreateDiv = function (html) {
    this.html = html;
    this.init();
};
CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

/**
 * 通用的管理单例
 */
function getSingle(fn) {
    var result;
    return function (html) {
        return result || (result = new fn(html));
    }
};
/**
 * 代理类 proxySingletonCreateDiv 实现单例模式，把负责管理单例的逻辑移到了代理类，proxySingletonCreateDiv 
 * 符合单一职责原则
 */
var ProxySingletonCreateDiv = (function () {
    var instance;
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();
var a = new ProxySingletonCreateDiv('111');
var b = new ProxySingletonCreateDiv('2222');
alert(a === b);
var SingletonCreateDiv = getSingle(CreateDiv);
var c = SingletonCreateDiv('333');
var d = SingletonCreateDiv('4444');
alert(c === d);

var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    document.body.appendChild(div);
    return div;
};
var createSingleLoginLayer = getSingle(createLoginLayer);
createSingleLoginLayer()