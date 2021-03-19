// 内置类型

// Math, global.....

// BOM DOM: document ....

// Utility Types
interface IPersons {
    name: string
    age: number
}
let kenyang: IPersons = {name: 'kenyang', age: 20}

type IPartial = Partial<IPersons> // Partial 所有参数都是可选的
let kenyang2: IPartial = {name: 'ken'}

type IOmit = Omit<IPersons, 'name'> // Omit: 忽略某个属性
let kenyang3: IOmit = {age: 20} // 只剩下age属性
