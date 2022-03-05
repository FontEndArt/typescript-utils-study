/**
 * @name NumberToTupleLength
 * @description 把正整数number转成一个any类型的元组
 * @example type A = NumberToTupleLength<1> // [any]
 * @example type B = NumberToTupleLength<2> // [any, any]
 * @example type C = NumberToTupleLength<3> // [any, any, any]
 */
export type NumberToTupleLength<T extends number, TT extends any[] = []> = [T] extends [TT['length']] ? TT : NumberToTupleLength<T, [...TT, any]>

/**
 * @name Add
 * @description 请实现Add<A, B>计算正整数之和。
 * @example type A = Add<1, 2> // 3
 * @example type B = Add<0, 0> // 0
 */
export type Add<A extends number, B extends number> = [...NumberToTupleLength<A>, ...NumberToTupleLength<B>]['length']

// type A = Add<1, 2> // 3
// type B = Add<0, 0> // 0
