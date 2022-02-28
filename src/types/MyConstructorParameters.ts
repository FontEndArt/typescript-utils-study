// abstract 抽象类
export type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

// class Foo {
//     constructor(a: string, b: number, c: boolean) { }
// }

// type C = MyConstructorParameters<typeof Foo>
//   // [a: string, b: number, c: boolean]