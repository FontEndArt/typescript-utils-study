// 构造函数返回的是类的实例，具体可参考 new 的实现
export type MyInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer P ? P : T

// class C {
//     x = 0;
//     y = 0;
// }

// type T0 = MyInstanceType<typeof C>;
// // type T0 = C
// type T1 = MyInstanceType<any>;
// // type T1 = any
// type T2 = MyInstanceType<never>;
// // type T2 = never
// type T3 = MyInstanceType<string>;
// // Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
// // type T3 = any
// type T4 = MyInstanceType<Function>;
// //   Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// //   Type 'Function' provides no match for the signature 'new (...args: any): any'.
       
// //   type T4 = any