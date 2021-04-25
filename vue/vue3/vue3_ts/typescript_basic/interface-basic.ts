interface Person {
    name: string;
    age?: number; // 可选
    readonly id: number; // 只读
}

let ken: Person = {
    name: 'ken',
    age: 20,
    id: 123
}

// ken.id = 222  报错，只读