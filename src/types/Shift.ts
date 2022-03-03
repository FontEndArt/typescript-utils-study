/**
 * @name Shift
 * @description 请实现Shift<T>来去掉tuple的第一个元素
 * @example type A = Shift<[1, 2, 3]> // [2, 3]
 * @example type B = Shift<[1]> // []
 * @example type C = Shift<[]> // []
 */
export type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : []

type A = Shift<[1, 2, 3]> // [2, 3]
type B = Shift<[1]> // []
type C = Shift<[]> // []