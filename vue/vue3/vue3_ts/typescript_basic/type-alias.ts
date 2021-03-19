let sum: (x: number, y: number) => number
const result_a = sum(1, 2)

// 定义一个别名
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result_a_2 = sum2(2, 3)

type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 12

// 字面常量定义
const str_ex: 'name' = 'name' // str_ex的值只能是name

type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Down'

interface Iname {
    name: string
}

type IPerson = Iname & {age: number}

let person: IPerson = { name: 'ken', age: 12 }