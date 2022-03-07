/**
 * @name ReplaceAll
 * @description Just like String.prototype.replaceAll(),
 * @example type A = ReplaceAll<'aba', 'b', ''> // 'aa'
 * @example type B = ReplaceAll<'ababbab', 'b', ''> // 'aaa'
 * @example type B = ReplaceAll<'ababbab', 'b', ''> // 'aaa'
 */
export type ReplaceAll<
    S extends string,
    F extends string,
    T extends string,
> = F extends ''
    ? S
    : S extends `${infer A}${F}${infer B}`
        ? `${A}${T}${ReplaceAll<B, F, T>}`
        : S

type A = ReplaceAll<'aba', 'b', ''> // 'aa'
type B = ReplaceAll<'ababbab', 'b', ''> // 'aaa'
type C = ReplaceAll<'aababbab', 'ab', ''> // 'ab'