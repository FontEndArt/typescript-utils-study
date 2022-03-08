import {NumberToTuple} from './Slice'
/**
 * @name SmallerThan
 * @description 实现小于，「A和B是大于等于0的整数」
 * @example type A = SmallerThan<0, 1> // true
 * @example type B = SmallerThan<1, 0> // false
 * @example type C = SmallerThan<10, 9> // false
 * @example type D = SmallerThan<0, 0> // false
 */
export type SmallerThan<
    A extends number,
    B extends number
> = NumberToTuple<A> extends [...NumberToTuple<B>, ...infer R]
        ? false
        : true


type A = SmallerThan<0, 1> // true
type B = SmallerThan<1, 0> // false
type C = SmallerThan<10, 9> // false
type D = SmallerThan<0, 0> // false