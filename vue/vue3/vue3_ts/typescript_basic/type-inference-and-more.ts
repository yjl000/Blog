let str = 'str' // type inference 类型推断是string，不能赋值为其他类型

// union types 联合类型
let numberOrString: number | string; // 可以赋值number和string类型，但是只能调用公共方法
// numberOrString.length 报错
// numberOrString.toString() 正确


function getLength(input: number | string): number {
    // as 类型断言，定义时的其中一种（number或者string），解决联合类型不能调用其中一种类型的方法的问题
    const str = input as string

    if (str.length) {
        return str.length
    }

    const number = input as number
    return number.toString().length
}

// type guard
function getLength2(input: number | string): number {

    if (typeof input === 'string') {
        return input.length
    }

    return input.toString().length
}

