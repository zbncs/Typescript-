// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 范型。
// Omit 会创建一个省略 K 中字段的 T 对象。

// Omit<T, K> 把K从属性从T中剔除，返回剔除后的属性和属性值

// 方法一：使用Pick 和 Exclude 组合
// 方法二：自己实现Pick 和 Exclude 组合


interface Todo {
    title: string
    description: string
    completed: boolean
}
// 方法一
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>


type TodoPreview1 = MyOmit<Todo, 'description' | 'title'>

const td: TodoPreview1 = {
    completed: false,
}

// 方法二
type MyPick1<T, K extends string | number | symbol> = {
    [k in K]: k extends keyof T ? T[k] : never;
}

type MyExclude1<T, K> = T extends K ? never : T;

type MyOmit1<T, K> = MyPick1<T, MyExclude1<keyof T, K>>;



type TodoPreview2 = MyOmit1<Todo, 'description' | 'title'>

const td1: TodoPreview1 = {
    completed: false,
}










