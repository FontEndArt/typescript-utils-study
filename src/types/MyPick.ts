export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
};

// type Foo = {
//     a: string
//     b: number
//     c: boolean
// }

// type A = MyPick<Foo, 'a' | 'b'> // {a: string, b: number}
// type B = MyPick<Foo, 'c'> // {c: boolean}
// type C = MyPick<Foo, 'd'> // Error

// type D = Pick<Foo, 'd'>