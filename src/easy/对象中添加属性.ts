// 实现向接口添加新字段的类型。该类型接受三个参数。输出应该是一个带有新字段的对象

// keyof Object, in not Object
type AppendToObject<T extends Object, S extends string, V> = {
    [P in keyof T | S]: P extends keyof T ? T[P] : V
};

type Test = { id: '1' }
type Result11 = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
