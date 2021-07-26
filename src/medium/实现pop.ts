
// 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。


type arr11 = ['a', 'b', 'c', 'd']
type arr21 = [3, 2, 1]

type Pop<T extends Array<any>> = T extends [...infer R, any] ? R : never; 

type re1 = Pop<arr11> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr21> // expected to be [3, 2]


type Push<T extends any[], V> = [...T, V]
type aa = Push<[1, 2, 3], 5>;

type Shift<T extends any[]> = T extends [any, ...infer R] ? R : never;
type bb = Shift<[1, 5, 6]>;

type Unshift<T extends any[], V> = [V, ...T];
type cc = Unshift<[10, 8, 6], 9>;

