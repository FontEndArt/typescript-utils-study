/**
 * @name NumberToTuple
 * @descript number 转 tuple类型
 * @example type A = NumberToTuple<0> // []
 * @example type A = NumberToTuple<1> // [any]
 * @example type A = NumberToTuple<2> // [any, any]
 */
export type NumberToTuple<T extends number = 0, R extends any[] = []> = 
    R['length'] extends T 
        ? R 
        : NumberToTuple<T, [...R, any]>

/**
 * @name Slice
 * @description Just like what Array.prototype.slice() does, please implement Slice<A, S, E>.
 * @example type A = Slice<[1,2,3,4], 0, 2> // [1, 2]
 * @example type B = Slice<[1,2,3,4], 2> // [3, 4]
 * @example type C = Slice<[number, boolean, bigint], 2, 5> // [bigint]
 * @example type D = Slice<[string, boolean], 0, 1> // [string]
 * @example type E = Slice<[number, boolean, bigint], 5, 6> // []
 * > 可以使用LessThan来比较大小，由于索引都是大于等于0的整数，所以可以使用简版的LessThan
 */
export type Slice<
    A extends any[],
    S extends number = 0, // 起始节点
    E extends number = A['length'], // 终止节点
    C extends any[] = [],
    D extends any[] = [],
    ST extends any[] = NumberToTuple<S>,
    ET extends any[] = NumberToTuple<E>,
> = 
    [0] extends [A['length']]
        ? D
        : [ST['length']] extends [C['length']]
            ? [ET['length']] extends [C['length']]
                ? D
                : A extends [infer L, ...infer R]
                    ? Slice<R, S, E, [...C, 1], [...D, L], [...C, 1], ET>
                    : D
            : A extends [infer L, ...infer R]
                ? Slice<R, S, E, [...C, 1], D, ST, ET>
                : D

type A = Slice<[1,2,3,4], 0, 2> // [1, 2]
type B = Slice<[1,2,3,4], 2> // [3, 4]
type C = Slice<[number, boolean, bigint], 2, 5> // [bigint]
type D = Slice<[string, boolean], 0, 1> // [string]
type E = Slice<[number, boolean, bigint], 5, 6> // []