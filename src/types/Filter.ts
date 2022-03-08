/**
 * @name Filter
 * @description 请实现Filter<T, A>，返回T中能够assign给A的type所组成的新tuple。
 * @example type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
 * @example type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
 * @example type C = Filter<[1, 'BFE', 2, true, 'dev'], null> // []
 * @example type D = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
 * @example type E = Filter<[1, 'BFE', 2, any, 'dev'], number> // [1, 2, any]
 * > 将持续关注[L]-extends-[A]和L-extends-A的区别是啥
 */
export type Filter<T extends any[], A, TT extends any[] = []> = T extends [infer L, ...infer R]
    ? Filter<R, A, [L] extends [A] ? [...TT, L] : TT>
    : TT

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, true, 'dev'], null> // []
type D = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
type E = Filter<[1, 'BFE', 2, any, 'dev'], number> // [1, 2, any]