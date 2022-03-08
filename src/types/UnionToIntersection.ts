/**
 * @name UnionToIntersection
 * @description 请实现UnionToIntersection<T>用以从Union得到Intersection。
 * @example type A = UnionToIntersection<{a: string} | {b: string} | {c: string}> // {a: string} & {b: string} & {c: string}
 * @url https://fettblog.eu/typescript-union-to-intersection/
 * > 不知道什么是逆变位置，为什么放到条件类型中，TS就会有装包和解包的操作
 */
export type UnionToIntersection<T> = 
    (T extends any ? (x: T) => any : never) extends
    (x: infer R) => any ? R : never

// type A = UnionToIntersection<{ a: string } | { b: string } | { c: string }>
// {a: string} & {b: string} & {c: string}