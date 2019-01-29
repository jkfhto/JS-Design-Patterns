function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.isTestable) // true

@testable(false)
class MyClass {}
console.log(MyClass.isTestable) // false