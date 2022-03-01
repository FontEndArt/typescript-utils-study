export type MyThisParameterType<T> = T extends (this: infer P, ...args: any) => any ? P : unknown;

function Foo(this: { a: string }) { }
function Bar() { }

type A = MyThisParameterType<typeof Foo> // {a: string}
type B = MyThisParameterType<typeof Bar> // unknown