/**
 * @description R | P 是作为联合类型返回的，通过递归进行联合
 * @description T extends [infer P, ...infer Q] 而不是反过来的
 */
export type TupleToUnion<T extends any[], R = T[0]> = T extends [infer P, ...infer Q] ? TupleToUnion<Q, R | P> : R

/**
 * @description 元组/数组 直接通过[number]访问，可以得到内部的类型
 */
export type TupleToUnion1<T extends any[]> = T extends [...infer R] ? R[number] : never

// type Foo = [string, number, boolean]

// type Bar = TupleToUnion<Foo> // string | number | boolean
// type Bar1 = TupleToUnion1<Foo> // string | number | boolean

// type a = Foo[number]


// type Foo1 = Array<string | number>
// type b = Foo1[number]