/**
 * @name LargerThan
 * @description 不考虑负数和小数的 LargerThan
 * @example type A = LargerThan<0, 1> // false
 * @example type B = LargerThan<1, 0> // true
 * @example type C = LargerThan<10, 9> // true
 */
export type LargerThan<A extends number, B extends number, TT extends number[] = []> =
    TT['length'] extends A
    ? false
    : TT['length'] extends B
        ? true
        : LargerThan<A, B, [...TT, 1]>

type A = LargerThan<0, 1> // false
type B = LargerThan<1, 0> // true
type C = LargerThan<10, 9> // true


export type NSymbol = 0 | 1

export const enum Res {
  Victory,
  Failure,
  Tie
}

export interface NumberObject<S extends NSymbol, I extends string[], F extends string[]> {
  symbol: S
  integer: I
  fractional: F
}
export type IsNegative<T extends number> = `${T}` extends `-${string}` ? true : false
export type IsFractional<T extends number> = `${T}` extends `${string}.${string}` ? true : false

export type Split<T extends string, P extends string[] = []> = 
  T extends ''
    ? P
    : T extends `${infer F}${infer R}` 
      ? Split<R, [...P, F]>
      : never


export type NumberObjectByNF<T extends number> = 
  `${T}` extends `${infer _}${infer I}.${infer F}`
    ? NumberObject<1, Split<I>, Split<F>>
    : never
export type NumberObjectByPF<T extends number> = 
  `${T}` extends `${infer I}.${infer F}`
    ? NumberObject<0, Split<I>, Split<F>>
    : never

export type NumberObjectByN<T extends number> =
  `${T}` extends `${infer _}${infer I}`
    ? NumberObject<1, Split<I>, []>
    : never

export type NumberObjectByP<T extends number> = NumberObject<0, Split<`${T}`>, []>

export type CreateNumberObject<T extends number, N = IsNegative<T>, F = IsFractional<T>> = 
  N extends true 
    ? F extends true
      ? NumberObjectByNF<T>
      : NumberObjectByN<T>
    : F extends true
      ? NumberObjectByPF<T>
      : NumberObjectByP<T>

export type NumberCompare<A extends string, B extends string, T extends string[] = [], L = `${T['length']}`> = 
  L extends A
    ? L extends B
      ? Res.Tie
      : Res.Failure
    : L extends B
      ? Res.Victory
      : NumberCompare<A, B, [...T, '_']>

export type Pop<T extends string[]> = T[0]
export type ShiftString<T extends string[]> = T extends [infer _, ...infer R] ? R : never

export type IsStringArray<T extends unknown> = 
  T extends Array<infer I> ? 
    I extends string 
      ? T 
      : never 
    : never

export type NumberArrayCompareHandler<A extends string[], B extends string[]> = 
  A['length'] extends 0
    ? B['length'] extends 0
      ? Res.Tie
      : Res.Failure
    : NumberCompare<Pop<A>, Pop<B>> extends Res.Tie
      ? NumberArrayCompareHandler<IsStringArray<ShiftString<A>>, IsStringArray<ShiftString<B>>>
      : NumberCompare<Pop<A>, Pop<B>>


export type SymbolCompareResMap = {
  '00': Res.Tie,
  '11': Res.Tie,
  '01': Res.Victory,
  '10': Res.Failure
}
export type SymbolCompare<A extends 0 | 1, B extends 0 | 1> = SymbolCompareResMap[`${A}${B}`]

export type NumberArrayCompare<A extends string[], B extends string[], CL extends boolean, LR = NumberCompare<`${A['length']}`, `${B['length']}`>> = 
  CL extends true
    ? LR extends Res.Tie
      ? NumberArrayCompareHandler<A, B>
      : LR
    : NumberArrayCompareHandler<A, B>

/**
 * @name LargerThan1
 * @description 判断number大于铁定是要带上小数和负数咯
 *
 * @example type A = LargerThan1<0, 1> // false
 * @example type B = LargerThan1<1, 0> // true
 * @example type C = LargerThan1<10, 9> // true
 * @example type D = LargerThan1<10, 9.3> // true
 *
 * @example type D1 = LargerThan1<9999999999.3, 99999999999.2>
 * @example type D2 = LargerThan1<-10, 9.3>
 * @example type D3 = LargerThan1<-9.34, -9.32>
 * @example type D4 = LargerThan1<9.33, 9.323>
 * @example type D5 = LargerThan1<-9.33232435455, -9.312838435934953>
 * @example type D6 = LargerThan1<-9.33213123123, -9.32>
 */
export type LargerThan1<
    A extends number, 
    B extends number, 
    AO extends NumberObject<NSymbol, [], []> = CreateNumberObject<A>, 
    BO extends NumberObject<NSymbol, [], []> = CreateNumberObject<B>,
    S =  SymbolCompare<AO['symbol'], BO['symbol']>,
    I = NumberArrayCompare<AO['integer'], BO['integer'], true>,
    F = NumberArrayCompare<AO['fractional'], BO['fractional'], false>
  > = 
    S extends Res.Failure ? false :
    S extends Res.Victory ? true :
      AO['symbol'] extends 1
        ? I extends Res.Failure ? true :
          I extends Res.Victory ? false :
          F extends Res.Failure ? true :
          false
        : I extends Res.Failure ? false :
          I extends Res.Victory ? true :
          F extends Res.Victory ? true :
          false
          
type D1 = LargerThan1<9999999999.3, 99999999999.2>
type D2 = LargerThan1<-10, 9.3>
type D3 = LargerThan1<-9.34, -9.32>
type D4 = LargerThan1<9.33, 9.323>
type D5 = LargerThan1<-9.33232435455, -9.312838435934953>
type D6 = LargerThan1<-9.33213123123, -9.32>


/**
 * @name LargerThan2
 * @description A大于等于B
 * @example type G1 = LargerThan<1, 2> // false
 * @example type G2 = LargerThan<1, 1> // true
 * @example type G3 = LargerThan<2, 1> // true
 */
 export type LargerThan2<A extends number, B extends number, TT extends number[] = []> =
 TT['length'] extends A
     ? TT['length'] extends B
         ? true
         : false
     : TT['length'] extends B
         ? true
         : LargerThan2<A, B, [...TT, 1]>
