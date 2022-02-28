// export type MyParameters<T> = [T] extends [(...args: Array<infer U>) => unknown]
export type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => unknown
    ? U
    : never;

// type Foo = (a: string, b: number, c: boolean) => string

// type A = MyParameters<Foo> // [a:string, b: number, c:boolean]
// type B = A[0] // string
// type C = MyParameters<{ a: string }> // Error