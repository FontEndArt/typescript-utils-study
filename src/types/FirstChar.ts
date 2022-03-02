export type FirstChar<T extends string> = T extends `${infer P}${any}` ? P : never;

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
