// 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

// infer 的应用，不知道什么类型，可以尝试infer 或者 T
type Last<T extends Array<any>> = T extends [...any, infer R] ? R : never;

type arr0 = ['a', 'b', 'c']
type arr00 = [3, 2, 1]

type tail1 = Last<arr0> // expected to be 'c'
type tail2 = Last<arr00> // expected to be 1
