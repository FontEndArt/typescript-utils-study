import { LargerThan2 } from './LargerThan'
import { NumberToTuple } from './Slice'
/**
 * @name SubtractHelper
 * @description 用来帮助计算 Subtract，前提条件：A.length肯定大于B.length
 */
export type SubtractHelper<A extends any[], B extends any[], R extends any[] = []> = 
    B['length'] extends A['length']
        ? R['length']
        : SubtractHelper<A, [...B, 1], [...R, 1]>

/**
 * @name Subtract
 * @description Similar to 38. implement Add<A, B>, please implement Subtract<A, B>.
 * @description 1.only need to consider positive integers
 * @description 2.B is guaranteed to be smaller or equal to A
 * @example type A = Subtract<1, 1> // 0
 * @example type B = Subtract<10, 3> // 7
 * @example type C = Subtract<3, 10> // never
 */
export type Subtract<A extends number, B extends number> = 
    LargerThan2<A, B> extends false
        ? never
        : SubtractHelper<NumberToTuple<A>, NumberToTuple<B>>

type A = Subtract<1, 1> // 0
type B = Subtract<10, 3> // 7
type C = Subtract<3, 10> // never