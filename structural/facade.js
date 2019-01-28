/**
 * 假设一台电脑，它包含了 CPU（处理器），Memory（内存） ，Disk（硬盘）这几个部件，若想要启动电脑，则先后必须启动 CPU、Memory、Disk。关闭也是如此。
 * 但是实际上我们在电脑开/关机时根本不需要去操作这些组件，因为电脑已经帮我们都处理好了，并隐藏了这些东西。
 * 这些组件好比子系统角色，而电脑就是一个外观角色
 */
/**
 * SubSystem（子系统角色）：在软件系统中可以有一个或者多个子系统角色，每一个子系统可以不是一个单独的类，而是一个类的集合，它实现子系统的功能；每一个子系统都可以被客户端直接调用，或者被外观角色调用，它处理由外观类传过来的请求；子系统并不知道外观的存在，对于子系统而言，外观角色仅仅是另外一个客户端而已
 */
class CPU {
    startup() {
        console.log("cpu startup!");
    }
    shutdown() {
        console.log("cpu shutdown!");
    }
}
class Memory {
    startup() {
        console.log("memory startup!");
    }
    shutdown() {
        console.log("memory shutdown!");
    }
}
class Disk {
    startup() {
        console.log("disk startup!");
    }
    shutdown() {
        console.log("disk shutdown!");
    }
}

/**
 *  Facade（外观角色）：在客户端可以调用它的方法，在外观角色中可以知道相关的（一个或者多个）子系统的功能和责任；在正常情况下，它将所有从客户端发来的请求委派到相应的子系统去，传递给相应的子系统对象处理
 */
 class Computer {
     constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.disk = new Disk();
    }

    startup() {
        console.log("start the computer!");
        this.cpu.startup();
        this.memory.startup();
        this.disk.startup();
        console.log("start computer finished!");
    }

    shutdown() {
        console.log("begin to close the computer!");
        this.cpu.shutdown();
        this.memory.shutdown();
        this.disk.shutdown();
        console.log("computer closed!");
    }
}
export {
    Computer
}
let _Computer = new Computer();
_Computer.startup();
_Computer.shutdown();