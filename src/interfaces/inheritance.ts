class Student {
    name: string
    age: number
    gender: string
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    type(str: string) {
        console.log(`${this.name}在typing${str}`)
    }
}

class Boy extends Student {
    constructor(name: string, age: number, gender: string) {
        super(name, age, gender)
    }
    type(str: string) {
        super.type(str)
    }
}

const bob = new Boy('bob', 13, '男')
bob.type('I am happy')