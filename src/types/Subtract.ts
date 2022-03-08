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


/**
 * @name SubtractHelper
 * @description 用来帮助计算 Subtract1，前提条件：A肯定大于B
 */
export type SubtractHelper1<A extends number, B extends number> = 
    NumberToTuple<A> extends [...NumberToTuple<B>, ...infer R]
        ? R['length']
        : never

/**
 * @name Subtract1
 * @description Similar to 38. implement Add<A, B>, please implement Subtract1<A, B>.
 * @description 1.only need to consider positive integers
 * @description 2.B is guaranteed to be smaller or equal to A
 * @example type A = Subtract1<1, 1> // 0
 * @example type B = Subtract1<10, 3> // 7
 * @example type C = Subtract1<3, 10> // never
 */
export type Subtract1<A extends number, B extends number> = 
    LargerThan2<A, B> extends false
        ? never
        : SubtractHelper1<A, B>
        