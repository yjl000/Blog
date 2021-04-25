// generics 泛型，定义的时候不指定类型，在使用的时候指定
function echo<T>(arg: T): T { // 传入的是什么类型，输出的就是什么类型
    return arg
}

const result = echo(123) // result必须和参数是同一类型


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap([123, 'str']) // 参数类型 元组：[string, number], result类型 元组：[number, string]



// 约束泛型
function echoWithArr<T>(arg: T[]): T[] { 
    console.log(arg.length); // 必须确定类型T有length属性
    return arg;
}

const arrs = echoWithArr([1, 2, 3])

// 约束所有有length属性的类型都可以
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const len = echoWithLength('111') // 可以是string和array和tuple、有length的object类型


class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
// queue.push('str')

console.log(queue.pop().toFixed()) // 1
// console.log(queue.pop().toFixed()) // error: toFixed not a function


// 泛型在interface的应用
interface KeyPair<T, U> {
    key: T;
    value: U;
}

const kp1: KeyPair<number, string> = {key: 1, value: 'str'}
const kp2: KeyPair<string, number> = {key: 'str', value: 2}
const arr: Array<number> = [1, 2, 3] // arr: number[] = [1,2,3]