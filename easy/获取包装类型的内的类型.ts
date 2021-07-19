// 如果我们有一个像 Promise. 我们如何获得包装类型内的类型？例如，如果我们有Promise<ExampleType>如何获取 ExampleType？

/* _____________ Your Code Here _____________ */

type Awaited<T> = T extends Promise<infer R> ? R : never


type X = Promise<string>
type Y = Promise<{ field: number }>

type A = Awaited<X>;
type B = Awaited<Y>;
const a: A = '';
const b: B = {field: 1};

// infer R: 表示把某一个类型推断为 R 类型。
// extends： 可以看作是赋值的意思。