/**
 * @name Push
 * @description 实现Push<T, I>
 * @example type A = Push<[1,2,3], 4> // [2,3]
 * @example type B = Push<[1], 2> // [1, 2]
 * @example type C = Push<[], string> // [string]
 */
export type Push<T extends any[], I> = T extends [...infer Rest] ? [...Rest, I] : T

type A = Push<[1, 2, 3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]
type C = Push<[], string> // [string]