import {NumberToTuple} from './Slice'

export type MultiplyHelper<A extends any[], B extends any[], C extends any[] = [], D extends any[] = []> = 
    C['length'] extends A['length']
        ? D['length']
        : MultiplyHelper<A, B, [...C, any], [...D, ...B]>

/**
 * @name Multiply
 * @description Implement Multiply<A, B> A * B, 正整数乘法
 * @example type A = Multiply<1, 0> // 0
 * @example type B = Multiply<4, 6> // 24
 */
export type Multiply<A extends number, B extends number> =
    0 extends A
        ? 0
        : 0 extends B
            ? 0
            : MultiplyHelper<NumberToTuple<A>, NumberToTuple<B>>

type A = Multiply<1, 0> // 0
type B = Multiply<4, 6> // 24