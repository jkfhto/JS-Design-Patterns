export default class Observer {
    constructor() {
        this._events = [];
    }
    /**
     * 订阅事件
     * @param {String} eventName 事件名称
     * @param {Object} callBack 回调函数
     */
    on(eventName, callBack) {
        var events = this._events;
        if (!events[eventName]) {
            events[eventName] = [];
        }
        events[eventName].push(callBack);
    };

    /**
     * 注销事件
     * @param {String} eventName - 事件名称
     * @param {Object} callBack - 回调函数
     */
    off(eventName, callBack) {
        var events = this._events;
        var callBacks = events[eventName];
        if (!callBacks) {
            return;
        }
        var index = callBacks.indexOf(callBack);
        if (index >= 0) {
            callBacks.splice(index, 1);
        }
    };

    /**
     * 发布事件
     * @param {String} eventName 事件名称
     * @param {Object} args 回调函数参数
     */
    fire(eventName, args) {
        var handlers = this._events[eventName];
        if (!handlers) {
            return;
        }
        //call the callBacks
        handlers.forEach(function (handler) {
            handler(args);
        }, this);
    };
}
