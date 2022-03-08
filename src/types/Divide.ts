import { LargerThan2 } from './LargerThan'
import { SubtractHelper1 } from './Subtract'


/**
 * @name DivideHelper
 * @description Divide 的辅助type，A.length肯定比B.length大
 */
export type DivideHelper<
    A extends number,
    B extends number,
    C extends any[] = [],
> = 0 extends A
    ? C['length']
    : LargerThan2<A, B> extends true
        ? DivideHelper<SubtractHelper1<A, B>, B, [...C, 1]>
        : C['length']

/**
 * @name Divide
 * @description Implement Divide<A, B> Math.floow(A/B) 
 * @description 只需要考虑非负整数。
 * @example type A = Divide<1, 0> // never
 * @example type B = Divide<4, 2> // 2
 * @example type C = Divide<10, 3> // 3
 * @example type D = Divide<3, 3> // 1
 * @example type E = Divide<3, 4> // 0
 */
export type Divide<A extends number, B extends number> = 
    A extends 0
        ? 0
        : B extends 0
            ? never
            : LargerThan2<A, B> extends false
                ? 0
                : [A] extends [B]
                    ? 1
                    : DivideHelper<A, B>

type A = Divide<1, 0> // never
type B = Divide<4, 2> // 2
type C = Divide<10, 3> // 3
type D = Divide<3, 3> // 1
type E = Divide<3, 4> // 0