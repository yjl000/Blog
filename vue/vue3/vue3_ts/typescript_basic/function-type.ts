function add (x: number, y: number, z?: number): number { // 可选参数必须放在最后
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

const func = (x: number, y: number): number => {
    return x + y
}

// let func2: string = func  func是ts声明的函数类型，不能赋值给string类型
let func2: (x: number, y: number) => number = add // ts中冒号后面的都是类型声明，与逻辑无关

// interface定义函数声明
interface ISum {
    (x: number, y: number): number
}
let func3: ISum = add