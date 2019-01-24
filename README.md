# JS-Design-Patterns
Design Patterns applied to Javascript code

# 设计原则 SOLID

**Single-单一职责原则<br>**
定义：不要存在多余一个导致类变更的原因<br>
举例：class A负责两个职责，职责1，职责2，一旦需求变更，职责1相关功能需要改变，修改class A可能会导致原本运行正常的职责2出现问题。<br>
解决方法：一个类/方法/一个程序只负责一项职责，如果功能复杂就进行拆分，每个部分保持独立<br>
优点：降低类的复杂度，提高可读性，提高系统可维护性，降低变更引起的风险。<br>

**Open-开放封闭原则<br>**
定义：一个类/模块/函数应该对扩展开放，对修改封闭<br>
举例：在软件的生命周期内，因为变化、升级和维护等原因需要对软件原有代码进行修改时，可能会给旧代码中引入错误，也可能会使我们不得不对整个功能进行重构，并且需要原有代码经过重新测试<br>
解决方法：当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化，用抽象构建框架，用实现扩展细节<br>
优点：提高系统的可维护性，可复用性以及稳定性<br>

**L-里氏置换原则<br>**
定义：子类能覆盖父类，子类可以扩展父类的功能，但不能改变父类原有的功能<br>
举例：有一功能P1，由类A完成。现需要将功能P1进行扩展，扩展后的功能为P，其中P由原有功能P1与新功能P2组成。新功能P由类A的子类B来完成，则子类B在完成新功能P2的同时，有可能会导致原有功能P1发生故障。<br>
解决方案：当使用继承时，遵循里氏替换原则。类B继承类A时，除添加新的方法完成新增功能P2外，尽量不要重写父类A的方法，也尽量不要重载父类A的方法
JS中使用较少（弱类型&继承使用较少）<br>


**Interface-接口独立原则<br>**
定义：用多个专门的接口，而不使用单一的总接口，客户端不应该依赖它不需要的接口<br>
js中没有接口（typescript）,使用较少<br>
优点：符合高内聚低耦合的设计思想，从而使得类具有很好的可读性，可扩展性和可维护性<br>

**Dependence-依赖倒置原则<br>**
定义：高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象<br>
面向接口编程，依赖于抽象而不依赖于具体，使用方只关注接口而不关注具体类的实现，js中使用较少（没有接口&弱类型）<br>
优点：降低类之间的耦合性，提高代码可读性和可维护性，提高系统稳定性，降低变更引起的风险。<br>

# 设计模式
- **简单工厂:**<br>
定义：由一个工厂对象决定创建出哪一个类的实例<br>
类型：创建型，但是不属于GOF23种设计模式<br>
适用场景：1：工厂类负责创建的对象比较少；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心<br>
优点：1：只需要传入一个正确的参数，就可以获取你所需的对象，而无需知道具体具体的创建细节<br>
缺点：1：工厂类的职责相对过重，增加新的产品需要修改工厂类的判断逻辑，违背开放封闭原则<br>
- **工厂方法:**<br>
定义：定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类，让类的实例化推迟到子类进行<br>
类型：创建型<br>
适用场景：1：创建对象需要大量重复代码；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）不依赖产品类实例如何被创建，实现等细节；&nbsp;&nbsp;&nbsp;&nbsp;3：一个类通过其子类来指定创建哪个对象；&nbsp;&nbsp;&nbsp;&nbsp;4：适合[产品等级](https://blog.csdn.net/lovelion/article/details/9319323)频繁更新的场景<br>
优点：1：用户只需关心所需产品对应的工厂，无需关心创建的细节；&nbsp;&nbsp;&nbsp;&nbsp;2：加入新产品符合开放封闭原则，提高可扩展性<br>
缺点：1：类的个数容易过多，增加复杂度；&nbsp;&nbsp;&nbsp;&nbsp;2：增加了系统的抽象性和理解难度<br>
- **抽象工厂:**<br>
定义：提供一个创建一系列相关或互相依赖对象的接口，无需指定他们具体的类<br>
类型：创建型<br>
适用场景：1：强调一系列相关的产品对象（属于同一产品族），一起使用创建时需要大量重复代码；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）不依赖产品类实例如何被创建，实现等细节；&nbsp;&nbsp;&nbsp;&nbsp;3：提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现；&nbsp;&nbsp;&nbsp;&nbsp;4：适合[产品族](https://blog.csdn.net/lovelion/article/details/9319323)频繁更新的场景<br>
优点：1：具体产品在应用层代码隔离，无需关心创建细节；&nbsp;&nbsp;&nbsp;&nbsp;2：将一系列产品族统一到一起创建<br>
缺点：1：规定了所有可能被创建的产品的集合，产品族中扩展新的产品（[产品等级](https://blog.csdn.net/lovelion/article/details/9319323)）困难，需要调整抽象工厂的接口；&nbsp;&nbsp;&nbsp;&nbsp;2：增加了系统的抽象性和理解难度<br>
- **建造者:**<br>
定义：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示，用户只需要指定建造的类型就可以得到它们，建造过程及细节不需要知道<br>
类型：创建型<br>
适用场景：1：如果一个对象有非常复杂的内部结构（很多属性）；&nbsp;&nbsp;&nbsp;&nbsp;2：想把复杂对象的创建和使用分离<br>
优点：1：封装性好，创建与使用分离；&nbsp;&nbsp;&nbsp;&nbsp;2：扩展性好，建造类之间独立，一定程度上解耦<br>
缺点：1：产生多余的Builder对象；&nbsp;&nbsp;&nbsp;&nbsp;2：产品内部发生修改，建造者都要修改，成本较大<br>

