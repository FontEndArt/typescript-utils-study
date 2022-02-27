// 映射类型 「+」 「-」 用来影响 「readonly」 和 「?」 属性 {只读、可变}
export type MyRequired<T> = {
    [P in keyof T]-?: T[P];
}

// // all properties are optional
// type Foo = {
//     a?: string
//     b?: number
//     c?: boolean
// }

// const a: MyRequired<Foo> = {}
// // Error

// const b: MyRequired<Foo> = {
//     a: 'BFE.dev'
// }
// // Error

// const c: MyRequired<Foo> = {
//     b: 123
// }
// // Error

// const d: MyRequired<Foo> = {
//     b: 123,
//     c: true
// }
// // Error

// const e: MyRequired<Foo> = {
//     a: 'BFE.dev',
//     b: 123,
//     c: true
// }
//   // valid