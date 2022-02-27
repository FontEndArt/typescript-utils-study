import { MyExclude } from './MyExclude';

export type MyOmit<T, K extends string | number | symbol> = {
    [P in MyExclude<keyof T, K>]: T[P];
}

type Foo = {
    a: string
    b: number
    c: boolean
}

type A = MyOmit<Foo, 'a' | 'b'> // {c: boolean}
type B = MyOmit<Foo, 'c'> // {a: string, b: number}
type C = MyOmit<Foo, 'c' | 'd'> // {a: string, b: number}
type D = Omit<Foo, 'c' | 'd'> // {a: string, b: number}
type E = Exclude<'a' | 'b', 'a'> // 'b'