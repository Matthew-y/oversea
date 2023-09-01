// 类的类型可以通过接口实现
interface Glide {
    fly():any
}

class Person implements Glide {
    fly() { // 实现接口中的方法
        console.log('I am gliding');
    }
}

const alex = new Person()

interface Swim {
    swim():any
}

// 一个类可以实现多个接口
class Athelete implements Glide, Swim {
    fly() {}
    swim() {}
}

const barry = new Athelete()

// 接口可以继承其他接口
interface Teacher extends Glide, Swim {}

class MrsWhite implements Teacher {
    fly() {}
    swim() {}
} 