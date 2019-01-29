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
解决方法：当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化，```用抽象构建框架，用实现扩展细节```<br>
优点：提高系统的可维护性，可复用性以及稳定性<br>

**L-里氏替换原则<br>**
定义：子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法，子类可以扩展父类的功能，但不能改变父类原有的功能<br>
举例：有一功能P1，由类A完成。现需要将功能P1进行扩展，扩展后的功能为P，其中P由原有功能P1与新功能P2组成。新功能P由类A的子类B来完成，则子类B在完成新功能P2的同时，有可能会导致原有功能P1发生故障。<br>
解决方案：当使用继承时，遵循里氏替换原则。类B继承类A时，除添加新的方法完成新增功能P2外，尽量不要重写父类A的方法，也尽量不要重载父类A的方法
JS中使用较少（弱类型&继承使用较少）<br>
优点：1：约束继承泛滥，开闭原则的一种体现；&nbsp;&nbsp;&nbsp;&nbsp;2：加强程序的健壮性，同时变更时也可以做到很好的兼容性，提高程序的维护性，扩展性。降低需求变更时引入的风险。


**Interface-接口独立原则<br>**
定义：用多个专门的接口，而不使用单一的总接口，客户端不应该依赖它不需要的接口<br>
js中没有接口（typescript）,使用较少<br>
优点：符合高内聚低耦合的设计思想，从而使得类具有很好的可读性，可扩展性和可维护性<br>

**Dependence-依赖倒置原则<br>**
定义：高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象<br>
面向接口编程，依赖于抽象而不依赖于具体，使用方只关注接口而不关注具体类的实现，js中使用较少（没有接口&弱类型）<br>
优点：降低类之间的耦合性，提高代码可读性和可维护性，提高系统稳定性，降低变更引起的风险。<br>

# 设计模式<br>
**设计模式可分为创建型(Creational)，结构型(Structural)和行为型(Behavioral)三种，其中创建型模式主要用于描述如何创建对象，结构型模式主要用于描述如何实现类或对象的组合，行为型模式主要用于描述类或对象怎样交互以及怎样分配职责**<br>
- **简单工厂:**<br>
定义：由一个工厂对象决定创建出哪一个类的实例<br>
类型：```创建型```，但是不属于GOF23种设计模式<br>
适用场景：1：工厂类负责创建的对象比较少；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心<br>
优点：1：只需要传入一个正确的参数，就可以获取你所需的对象，而无需知道具体具体的创建细节<br>
缺点：1：工厂类的职责相对过重，增加新的产品需要修改工厂类的判断逻辑，违背开放封闭原则<br>
- **工厂方法:**<br>
定义：定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类，让类的实例化推迟到子类进行<br>
类型：```创建型```<br>
适用场景：1：创建对象需要大量重复代码；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）不依赖产品类实例如何被创建，实现等细节；&nbsp;&nbsp;&nbsp;&nbsp;3：一个类通过其子类来指定创建哪个对象；&nbsp;&nbsp;&nbsp;&nbsp;4：适合[产品等级](https://blog.csdn.net/lovelion/article/details/9319323)频繁更新的场景<br>
优点：1：用户只需关心所需产品对应的工厂，无需关心创建的细节；&nbsp;&nbsp;&nbsp;&nbsp;2：加入新产品符合开放封闭原则，提高可扩展性<br>
缺点：1：类的个数容易过多，增加复杂度；&nbsp;&nbsp;&nbsp;&nbsp;2：增加了系统的抽象性和理解难度<br>
- **抽象工厂:**<br>
定义：提供一个创建一系列相关或互相依赖对象的接口，无需指定他们具体的类<br>
类型：```创建型```<br>
适用场景：1：强调一系列相关的产品对象（属于同一产品族），一起使用创建时需要大量重复代码；&nbsp;&nbsp;&nbsp;&nbsp;2：客户端（应用层）不依赖产品类实例如何被创建，实现等细节；&nbsp;&nbsp;&nbsp;&nbsp;3：提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现；&nbsp;&nbsp;&nbsp;&nbsp;4：适合[产品族](https://blog.csdn.net/lovelion/article/details/9319323)频繁更新的场景<br>
优点：1：具体产品在应用层代码隔离，无需关心创建细节；&nbsp;&nbsp;&nbsp;&nbsp;2：将一系列产品族统一到一起创建<br>
缺点：1：规定了所有可能被创建的产品的集合，产品族中扩展新的产品（[产品等级](https://blog.csdn.net/lovelion/article/details/9319323)）困难，需要调整抽象工厂的接口；&nbsp;&nbsp;&nbsp;&nbsp;2：增加了系统的抽象性和理解难度<br>
- **建造者:**<br>
定义：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示，用户只需要指定建造的类型就可以得到它们，建造过程及细节不需要知道<br>
类型：```创建型```<br>
适用场景：1：如果一个对象有非常复杂的内部结构（很多属性）；&nbsp;&nbsp;&nbsp;&nbsp;2：想把复杂对象的创建和使用分离<br>
优点：1：封装性好，创建与使用分离；&nbsp;&nbsp;&nbsp;&nbsp;2：扩展性好，建造类之间独立，一定程度上解耦<br>
缺点：1：产生多余的Builder对象；&nbsp;&nbsp;&nbsp;&nbsp;2：产品内部发生修改，建造者都要修改，成本较大<br>
- **单例:**<br>
定义：保证一个类只有一个实例，并提供一个全局访问点<br>
类型：```创建型```<br>
适用场景：1：想确保任何情况下都只有一个实例；&nbsp;&nbsp;&nbsp;&nbsp;2：需要频繁实例化然后销毁的对象；&nbsp;&nbsp;&nbsp;&nbsp;3：创建对象时耗时过多或者耗资源过多，但又经常用到的对象<br>
优点：1：在内存中只有一个实例对象，节省内存空间；&nbsp;&nbsp;&nbsp;&nbsp;2：避免频繁的创建销毁对象，可以提高性能；&nbsp;&nbsp;&nbsp;&nbsp;3：避免对共享资源的多重占用；&nbsp;&nbsp;&nbsp;&nbsp;4：设置全局访问点，严格控制访问；&nbsp;&nbsp;&nbsp;&nbsp;<br>
缺点：1：没有接口扩展困难<br>
- **原型:**<br>
定义：用原型实例指定创建对象的种类，并通过拷贝这些原型创建新的对象<br>
类型：```创建型```<br>
适用场景：1：类初始化消耗较多资源；&nbsp;&nbsp;&nbsp;&nbsp;2：构造函数比较复杂；&nbsp;&nbsp;&nbsp;&nbsp;3：new产生一个对象需要非常繁琐的过程（数据准备，访问权限等）；&nbsp;&nbsp;&nbsp;&nbsp;4：循环体中生产大量对象时；<br>
优点：1：简化创建过程；&nbsp;&nbsp;&nbsp;&nbsp;2：原型模式比直接new一个对象的性能高；<br>
缺点：1：必须配备克隆方法；&nbsp;&nbsp;&nbsp;&nbsp;2：对克隆复杂对象或对克隆出的对象进行改造时，容易引入风险；&nbsp;&nbsp;&nbsp;&nbsp;3：深拷贝浅拷贝要运用得当；<br><br>

- **适配器:**<br>
定义：旧接口格式和使用者不兼容，中间加一个适配器转换接口，将一个类的接口转换成客户期待的另一个接口<br>
类型：```结构型```<br>
适用场景：1：已经存在的类，它的方法和需求不匹配时（方法结果相同或相似）；&nbsp;&nbsp;&nbsp;&nbsp;2：不是软件设计阶段考虑的设计模式，是随着软件维护，由于不同产品，不同厂家造成功能类似而接口不相同情况下的解决方案；<br>
优点：1：提高类的透明和复用，现有的类复用但不需要改变；&nbsp;&nbsp;&nbsp;&nbsp;2：目标类和适配器类解耦，提高程序扩展性；&nbsp;&nbsp;&nbsp;&nbsp;3：符合开放封闭原则；<br>
缺点：1：适配器编写过程需要考虑全面，可能会增加系统复杂度；&nbsp;&nbsp;&nbsp;&nbsp;2：增加系统代码可读难度；<br>
- **装饰者:**<br>
定义：不改变原有对象的基础上，给对象添加新的功能，提供了比继承更有弹性的替代方案（扩展原有对象功能），使原有对象可以满足用户更复杂的需求<br>
类型：```结构型```<br>
适用场景：1：扩展一个类的功能或给一个类添加附加职责；&nbsp;&nbsp;&nbsp;&nbsp;2：动态的给一个对象添加功能，这些功能可以再动态撤销；<br>
优点：1：继承的有力补充，比继承灵活，不改变原有对象的基础上给一个对象添加功能；&nbsp;&nbsp;&nbsp;&nbsp;2：通过使用不同装饰类以及这些装饰类的排列组合，可以实现不同效果；&nbsp;&nbsp;&nbsp;&nbsp;3：符合开放封闭原则；<br>
缺点：1：会出现更多的代码，更多的类，增加程序复杂性；&nbsp;&nbsp;&nbsp;&nbsp;2：动态装饰时，多层装饰会更复杂；
- **代理:**<br>
定义：为对象提供一种代理，以控制对这个对象的访问，代理对象在客户端和目标对象之间起到中介的作用<br>
类型：```结构型```<br>
适用场景：1：保护目标对象；&nbsp;&nbsp;&nbsp;&nbsp;2：增强目标对象；<br>
优点：1：代理模式能将代理对象与真实被调用的目标对象分离；&nbsp;&nbsp;&nbsp;&nbsp;2：一定程度上降低了系统耦合度，扩展性好；&nbsp;&nbsp;&nbsp;&nbsp;3：保护目标对象；&nbsp;&nbsp;&nbsp;&nbsp;2：增强目标对象；<br>
缺点：1：会造成系统设计中类的数目增加，增加系统复杂性；&nbsp;&nbsp;&nbsp;&nbsp;2：在客户端和目标对象增加一个代理对象，一定程度上会造成请求处理速度变慢；
- **外观:**<br>
定义：又叫门面模式，提供了一个统一的接口，用来访问子系统中的一群接口，定义了一个高层接口，让子系统更容易使用<br>
类型：```结构型```<br>
适用场景：1：子系统越来越复杂，增加外观模式提供简单调用接口；&nbsp;&nbsp;&nbsp;&nbsp;2：构建多层系统结构，利用外观对象作为每层的入口，简化层间调用；<br>
优点：1：简化了调用过程，无需深入了解子系统，防止带来风险；&nbsp;&nbsp;&nbsp;&nbsp;2：较少系统依赖，松散耦合；&nbsp;&nbsp;&nbsp;&nbsp;3：更好的划分访问层次；<br>
缺点：1：增加子系统，扩展子系统行为容易引入风险；&nbsp;&nbsp;&nbsp;&nbsp;2：不符合开闭原则；<br>
- **桥接:**<br>
定义：将抽象部分与它的具体实现部分分离，使它们都可以独立的变换，通过组合的方式建立两个类之间的联系，而不是继承<br>
类型：```结构型```<br>
适用场景：1：抽象和具体实现之间增加更多灵活性；&nbsp;&nbsp;&nbsp;&nbsp;2：一个类存在两个（或多个）独立变化的维度，且这两个（或多个）维度都需要独立的进行扩展；<br>
优点：1：分离抽象部分及其具体实现部分；&nbsp;&nbsp;&nbsp;&nbsp;2：提高了系统的可扩展性；&nbsp;&nbsp;&nbsp;&nbsp;3：符合开闭原则；<br>
缺点：1：增加了系统的理解和设计难度；&nbsp;&nbsp;&nbsp;&nbsp;2：需要正确的识别出系统中两个独立变化的维度；<br>
- **组合:**<br>
定义：将对象组合成树结构以表示“部分-整体”的层次结构，使客户端对单个对象和组合对象保持一致的方式处理<br>
类型：```结构型```<br>
适用场景：1：希望客户端可以忽略组合对象和单个对象的差异时；&nbsp;&nbsp;&nbsp;&nbsp;2：处理一个树形结构时；<br>
优点：1：清楚的定义分层次的复杂对象，表示对象的全部或部分层次；&nbsp;&nbsp;&nbsp;&nbsp;2：让客户端忽略了层次的差异，方便对整个层次结构进行控制；&nbsp;&nbsp;&nbsp;&nbsp;3：简化客户端代码；&nbsp;&nbsp;&nbsp;&nbsp;4：符合开放封闭原则；<br>
缺点：1：限制类型时会较为复杂；&nbsp;&nbsp;&nbsp;&nbsp;2：设计变得更加抽象；<br>
- **享元:**<br>
定义：提供了减少对象数量，从而改善应用所需的对象结构的方式，有效地支持大量细粒度对象的复用<br>
类型：```结构型```<br>
适用场景：1：常常应用于系统底层开发，以便解决系统的性能问题；&nbsp;&nbsp;&nbsp;&nbsp;2：系统有大量相似对象，需要缓冲池的场景；<br>
优点：1：减少对象的创建，降低内存中对象的数量，降低系统内存，提高效率；&nbsp;&nbsp;&nbsp;&nbsp;2：减少内存之外的其他资源的占用；<br>
缺点：1：关注内/外部状态，关注线程安全性问题；&nbsp;&nbsp;&nbsp;&nbsp;2：使系统，程序的逻辑复杂化；<br>
- **观察者:**<br>
定义：定义对象间一种一对多的依赖关系，当每一个对象改变状态，则所有依赖于它的对象都会得到通知并自动更新<br>
类型：```行为型```<br>
适用场景：1：关联行为场景，建立一套触发机制；br>
优点：1：观察者与被观察者之间建立一个抽象的耦合；&nbsp;&nbsp;&nbsp;&nbsp;2：支持广播通信；<br>
缺点：1：观察者之间有过多的细节依赖，提高时间消耗及程序复杂度；&nbsp;&nbsp;&nbsp;&nbsp;2：使用要得当，要避免循环调用；br>
- **迭代器:**<br>
定义：提供一种方法。顺序访问一个集合对象中的各个元素，而又不暴露该对象的内部表示<br>
类型：```行为型```<br>
适用场景：1：访问一个集合对象的内容而无需暴露它的内部表示；&nbsp;&nbsp;&nbsp;&nbsp;2：为遍历不同的集合结构提供一个统一的接口<br>
优点：1：分离了集合对象的遍历行为；将存储数据与遍历数据分离<br>
缺点：1：类的个数成对增加；<br>
- **状态:**<br>
定义：允许一个对象在其内部状态发生改变时，改变它的行为<br>
类型：```行为型```<br>
适用场景：1：一个对象存在多个状态（不同状态下行为不同），且状态可以相互转换；<br>
优点：1：将不同状态隔离；&nbsp;&nbsp;&nbsp;&nbsp;2：把各种状态的转换逻辑，分布到State的子类中，减少相互间依赖；&nbsp;&nbsp;&nbsp;&nbsp;3：增加新的状态非常简单<br>
缺点：1：状态多的场景导致类数目增加，系统变复杂；<br>


