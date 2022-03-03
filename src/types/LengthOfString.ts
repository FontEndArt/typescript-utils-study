/**
 * @name LengthOfString
 * @description 请实现LengthOfString<T>用以返回字符串长度。
 * @example type A = LengthOfString<'BFE.dev'> // 7
 * @example type B = LengthOfString<''> // 0
 * @augments 通过string转array来实现
 */
export type LengthOfString<T extends string, AT extends any[] = []> = T extends `${infer L}${infer R}`
    ? LengthOfString<R, [...AT, L]>
    : AT['length']

// type A = LengthOfString<'BFE.dev'> // 7
// type B = LengthOfString<''> // 0
