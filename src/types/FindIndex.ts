import { IsAny1 } from "./IsAny"
/**
 * @name FindIndex
 * @description 正如Array.prototype.findIndex()， 请实现FindIndex<T, E>。
 * @example type A = [any, never, 1, '2', true]
 * @example type B = FindIndex<A, 1> // 2
 * @example type C = FindIndex<A, 3> // never
 */
export type FindIndex<T extends any[], E, TT extends any[] = []> = 
    T extends [infer L, ...infer R]
        ? [E] extends [L]
            ? IsAny1<L> extends IsAny1<E>
                ? TT['length']
                : FindIndex<R, E, [...TT, 1]>
            : FindIndex<R, E, [...TT, 1]>
        : never

type A = [any, never, 1, '2', true]

type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never

