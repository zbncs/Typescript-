// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。
// 你需要提供两个函数 option(key, value) 和 get()。
// 在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。


// type Chainable = {
//     option: <K extends string, V>(key: K, value: V) => Chainable<>,
//     get: () => 
// }

// 不知道返回值是什么，就定义一个范型
type Chainable<T = {}> = {
    option: <K extends string, V>(key: K, value: V) => Chainable<T & {[P in K] : V}>
    get(): T
}

declare const config: Chainable

const result1 = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Res {
  foo: number
  name: string
  bar: {
    value: string
  }
}

