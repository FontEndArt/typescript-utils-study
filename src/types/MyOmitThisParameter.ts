export type MyOmitThisParameter<T> = 
    // 判定是否存在 this parameter
    unknown extends ThisParameterType<T> 
        // 如果不存在则直接返回T
        ? T 
        // 如果存在的进行融合的返回类型
        : T extends (...args: infer P) => infer R 
            ? (...args: P) => R 
            : T

// function foo(this: { a: string }) { }
// // foo() // Error

// const bar = foo.bind({ a: 'BFE.dev' })
// bar() // OK


// type Foo = (this: { a: string }) => string
// type Bar = MyOmitThisParameter<Foo> // () => string

// function toHex(this: Number) {
//     return this.toString(16);
// }
// const fiveToHex: MyOmitThisParameter<typeof toHex> = toHex.bind(5);

// console.log(fiveToHex());