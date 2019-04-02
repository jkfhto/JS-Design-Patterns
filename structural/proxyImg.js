/**
 * 通过代理对象， 实际上给myImage添加了新的行为。 这是符合开放— 封闭原则的。 给 img 节点设置 src 和图片预加载这两个功能， 被隔离在两个对象里， 它们可以各自变化而不影响对方。 何况就算有一天我们不再需要预加载， 那么只需要改成请求本体而不是请求代理对象即可
 * 代理对象和本体都对外提供了 setSrc 方法:
 * 用户可以放心地请求代理， 他只关心是否能得到想要的结果
 * 在任何使用本体的地方都可以替换成使用代理
 */
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('./resources/loading.gif');
            img.src = src;
        }
    }
})();
proxyImage.setSrc('http://zqyxback.df-house.com/static/media/%E5%A4%A7%E8%83%8C%E6%99%AF%EF%BC%88%E5%85%A8%E5%8C%85%E5%90%AB%EF%BC%89@2x.5bc2cc20.png');