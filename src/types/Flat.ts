/**
 * @name Flat
 * @description 实现Flat<T>扁平化元组类型。 - 清晰明了
 * @example type A = Flat<[1,2,3]> // [1,2,3]
 * @example type B = Flat<[1,[2,3], [4,[5,[6]]]]> // [1,2,3,4,5,6]
 * @example type C = Flat<[]> // []
 */
export type Flat<T extends any[], AT extends any[] = []> = T extends [infer L, ...infer R]
    ? L extends any[] ? [...Flat<L>, ...Flat<R>] : [L, ...Flat<R>]
    : AT

/**
 * @name Flat1
 * @description 实现Flat1<T>扁平化元组类型。 - 简单
 * @example type A = Flat1<[1,2,3]> // [1,2,3]
 * @example type B = Flat1<[1,[2,3], [4,[5,[6]]]]> // [1,2,3,4,5,6]
 * @example type C = Flat1<[]> // []
 */
export type Flat1<T extends any[], AT extends any[] = []> = T extends [infer L, ...infer R]
    ? [...L extends any[] ? Flat<L> : [L], ...Flat<R>]
    : AT

type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []

type A1 = Flat1<[1, 2, 3]> // [1,2,3]
type B1 = Flat1<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C1 = Flat1<[]> // []