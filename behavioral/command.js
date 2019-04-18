//接收者
class Receiver{
    execute(){
        console.log("执行命令");
    }
}

//命令者
class Command{
    constructor(receiver){
        this.receiver = receiver;
    }
    execute(){
        this.receiver.execute();
    }
}

//发布者
class Invoker{
    constructor(command){
        this.command = command;
    }
    incoke(){
        console.log("发布命令")
        this.command.execute();
    }
}

//士兵
let solider = new Receiver();
//小号手
let trumpeter = new Command(solider);
//将军
let general = new Invoker(trumpeter);
general.incoke();