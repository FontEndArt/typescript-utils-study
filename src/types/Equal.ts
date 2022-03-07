import { IsAny1 } from "./IsAny"
// export type IsAny1<T> = 0 extends 1 & T ? true : false
/**
 * @name Equal
 * @description Implement Equal<A, B> to check if two types are identical.
 * @example type a = Equal<any, any> // true
 * @example type b = Equal<any, 1> // false
 * @example type c = Equal<never, never> // true
 * @example type d = Equal<'BFE', 'BFE'> // true
 * @example type e = Equal<'BFE', string> // false
 * @example type f = Equal<1 | 2, 2 | 1> // true
 * @example type g = Equal<{a : number}, {a: number}> // true
 */
export type Equal<A, B> = 
    true extends IsAny1<A>
        ? true extends IsAny1<B>
            ? true
            : false
        : true extends IsAny1<B>
            ? false
            : [A] extends [B]
                ? [B] extends [A]
                    ? true
                    : false
                : false

type a = Equal<any, any> // true
type b = Equal<any, 1> // false
type c = Equal<never, never> // true
type d = Equal<'BFE', 'BFE'> // true
type e = Equal<'BFE', string> // false
type f = Equal<1 | 2, 2 | 1> // true
type g = Equal<{a : number}, {a: number}> // true