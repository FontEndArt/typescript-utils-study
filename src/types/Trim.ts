/**
 * @name LTrim
 * @description String.prototype.trimStart
 * @example type A = LTrim<'    xxx  '> // 'xxx  '
 */
export type LTrim<T extends string> = 
    T extends `${infer L}${infer R}`
        ? [L] extends [' ']
            ? LTrim<R>
            : T
        : T

/**
 * @name RTrim
 * @description String.prototype.trimEnd
 * @example type A = LTrim<'    xxx  '> // '    xxx'
 */
export type RTrim<T extends string, > = 
    T extends `${infer L}${infer R}`
        ? [R] extends [' ']
            ? L
            : [RTrim<R>] extends [' ']
                ? L
                : `${L}${RTrim<R>}`
        : T

/**
 * @name Trim
 * @description 正如String.prototype.trim()，请实现Trim<T>。
 * @example type A = Trim<'    BFE.dev'> // 'BFE'
 * @example type B = Trim<' BFE. dev  '> // 'BFE. dev'
 * @example type C = Trim<'  BFE .   dev  '> // 'BFE .   dev'
 */
export type Trim<T extends string> = LTrim<RTrim<T>>;

type A = Trim<'    BFE.dev'> // 'BFE'
type B = Trim<' BFE. dev  '> // 'BFE. dev'
type C = Trim<'  BFE .   dev  '> // 'BFE .   dev'