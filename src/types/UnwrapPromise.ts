/**
 * @name UnwrapPromise
 * @description 实现UnwrapPromise<T>以返回已解决的承诺类型。
 * @example type A = UnwrapPromise<Promise<string>> // string
 * @example type B = UnwrapPromise<Promise<null>> // null
 * @example type C = UnwrapPromise<null> // Error
 */
export type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer P> ? P : never

// type A = UnwrapPromise<Promise<string>> // string
// type B = UnwrapPromise<Promise<null>> // null
// type C = UnwrapPromise<null> // Error