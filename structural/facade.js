/**
 * 假设一台电脑，它包含了 CPU（处理器），Memory（内存） ，Disk（硬盘）这几个部件，若想要启动电脑，则先后必须启动 CPU、Memory、Disk。关闭也是如此。
 * 但是实际上我们在电脑开/关机时根本不需要去操作这些组件，因为电脑已经帮我们都处理好了，并隐藏了这些东西。
 * 这些组件好比子系统角色，而电脑就是一个外观角色
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