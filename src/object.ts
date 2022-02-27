/**
 * 判定是否对象类型
 */
 export type isObject<T> = [T] extends [object] ? true : false;
