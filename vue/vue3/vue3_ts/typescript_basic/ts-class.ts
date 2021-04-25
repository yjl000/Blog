// 默认是public
class Animal {
    // readonly name: string; 只读，不能改
    name: string;
    constructor(name) {
        this.name = name
    }
    // private 私有属性，只能在Animal中访问
    //  private run() {

    // protected 私有，只能自己和子女类访问
    // protected run() {
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.run())