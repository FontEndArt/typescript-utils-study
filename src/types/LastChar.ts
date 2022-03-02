export type LastChar1<T extends string> = T extends `${infer L}${infer R}`
    ? R extends ''
    ? L
    : LastChar1<R>
    : never;

export type LastChar2<T extends string, Right = never> = T extends `${infer L}${infer R}` ? LastChar2<R, L> : Right;

type A1 = LastChar1<'BFE'> // 'E'
type B1 = LastChar1<'dev'> // 'v'
type C1 = LastChar1<''> // never

type A2 = LastChar2<'BFE'> // 'E'
type B2 = LastChar2<'dev'> // 'v'
type C2 = LastChar2<''> // never
